# reNFT v3 Indexing - Subsquid

## Development

To spin up a docker db:

`sqd up`

If you need to generate a new migrations script, first, check the format of the migrations file in (db/migrations). Notice how it's formatted. After making changes to `schema.graphql`, run:

`sqd migrations:generate`

Now, go to the generated migrations file, and re-format it to match the format of other migration files.

Note, that by default, it will generate indices for all the columns on the table. This isn't necessary. Choose the columns you want to index and remove the rest. Moreover, it will autogenerate removals of indices in the `down` step. This isn't required if you drop the database, so remove those too.

---

You can learn about all the commands at your disposal in `commands.json`

To connect to the database and explore the data you can use various clients, for example:

- pgAdmin (if you will just use it for PostgreSQL)
- DBeaver (if you will use it for multiple databases)
- DBVisualiser (if you will use it for multiple databases)

Here is the default data you'd need to use to connect to the db:

![squid db config](./assets/squid-db.png)

Password is `postgres`

---

To start sepolia indexing run:

`sqd process:eth-sepolia`

To start mumbai indexing run:

`sqd process:polygon-mumbai`

---

To have subsquid write to your own database, utilise the following environment variables:

- `DB_HOST`
- `DB_PORT`
- `DB_NAME`
- `DB_USER`
- `PGSSLMODE=true`

## Optimisations

Right now, the data goes into aquarium hosted db. Then, api will pull that data by making post requests to the squid graphql server.

If we are seeing slow responses, then we can save indexed data straight into the same db as the api.

This wasn't done originally because of migrations. Subsquid has its own migrations and our api does too. To avoid potential conflicts, it was decided to keep the dbs separate to begin with.

It is possible to index transactions with subsquid but they are more costly in terms of RPC calls, which is OK, if we need to do it. However, there is no point in double indexing the same data with transactions and logs at the same time.

### Prod Checklist

Right now, we are writing everything into the `main` branch of neondb.

Non-prod indexing should be done in feature branches, instead.

Consider if writing indexed data into non-public schema is a better approach. I couldn't find how to do it with subsquid, though.
