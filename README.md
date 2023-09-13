# reNFT v3 Indexing - Subsquid

## Development

To spin up a docker db:

`sqd up`

If you need to generate a new migrations script, first, check the format of the migrations file in (db/migrations). Notice how it's formatted. After making changes to `schema.graphql`, run:

`sqd migrations:generate`

Now, go to the generated migrations file, and re-format it to match the format of other migration files.

Note, that by default, it will generate indices for all the columns on the table. This isn't necessary. Choose the columns you want to index and remove the rest. Moreover, it will autogenerate removals of indices in the `down` step. This isn't required if you drop the database, so remove those too.

---

Right now it's quite hacky to run the migrations when you are using external db.

We have switched off squid from running migrations itself (you cannot set `DB_NAME`, `DB_USER`, etc. when deploying to aquarium). Therefore, it is your responsibility, to manually run migrations before you deploy. To do so, set correctly (**notice there is no `V3_` prefix!**):

- `DB_HOST`
- `DB_NAME`
- `DB_USER`
- `DB_PASS`

in `.env` and then run `sqd migration:apply`

---

You can learn about all the commands at your disposal in `commands.json`

To connect to the database and explore the data you can use various clients, for example:

- pgAdmin (if you will just use it for PostgreSQL)
- DBeaver (if you will use it for multiple databases)
- DBVisualiser (if you will use it for multiple databases)

Here is the default data you'd need to use to connect to the db:

![squid db config](./assets/squid-db.png)

Port in the above depends on what you set in `.env` file.

Password is `postgres`

---

To start sepolia indexing run:

`sqd process:eth-sepolia`

To start mumbai indexing run:

`sqd process:polygon-mumbai`

---

To have subsquid write to your own database locally, utilise the following environment variables:

- `V3_DB_HOST`
- `V3_DB_PORT`
- `V3_DB_NAME`
- `V3_DB_USER`
- `PGSSLMODE=true` (you only need this if you are writing to neondb from local terminal)

To have hosted aquarium service pick up our external db, we need to re-define `DB_HOST`, `DB_PORT`, `DB_NAME` and `DB_USER` to point to the above. That is what you see before processors gets initilised in this codebase.

## Optimisations

Right now, the data goes into aquarium hosted db. Then, api will pull that data by making post requests to the squid graphql server.

If we are seeing slow responses, then we can save indexed data straight into the same db as the api.

This wasn't done originally because of migrations. Subsquid has its own migrations and our api does too. To avoid potential conflicts, it was decided to keep the dbs separate to begin with.

It is possible to index transactions with subsquid but they are more costly in terms of RPC calls, which is OK, if we need to do it. However, there is no point in double indexing the same data with transactions and logs at the same time.

### Prod Checklist

Right now, we are writing everything into the `main` branch of neondb.

Non-prod indexing should be done in feature branches, instead.

Writing data to non-"public" schema would be useful, that way we do not run risk of having api read or write from the wrong schema.

What schema to write to depends on the user. So creating a user with requisite settings, will ensure you are writing to the right schema. However, if you are using a hosted db that doesn't allow you to tinker with those settings, then there is no way to write to a schema other than "public". This is one of the drawbacks of having squid write to your own db. If you can control what schemas your other services write to, then it's better to adjust settings there and squid will keep writing to "public" schema.
