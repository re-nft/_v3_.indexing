module.exports = class Data1699395451901 {
  name = "Data1699395451901";

  async up(db) {
    // ====================
    // BLOCK TABLE
    // ====================
    await db.query(`
CREATE TABLE "block" (
    "id" varchar NOT NULL,
    "network" text NOT NULL,
    "number" integer NOT NULL,
    "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL,
    CONSTRAINT "block_pkey" PRIMARY KEY ("id")
)
`);

    await db.query(`CREATE INDEX "idx_block_network" ON "block" ("network")`);
    await db.query(`CREATE INDEX "idx_block_timestamp" ON "block" ("timestamp")`);

    // ============================
    // TRANSACTION TABLE
    // ============================
    await db.query(`
CREATE TABLE "transaction" (
    "id" varchar NOT NULL,
    "network" text NOT NULL,
    "block_number" integer,
    "block_timestamp" TIMESTAMP WITH TIME ZONE NOT NULL,
    "hash" text NOT NULL,
    "to" text,
    "from" text,
    "status" integer,
    CONSTRAINT "transaction_pkey" PRIMARY KEY ("id")
)
`);

    await db.query(`CREATE INDEX "idx_transaction_network" ON "transaction" ("network")`);
    await db.query(`CREATE INDEX "idx_transaction_block_timestamp" ON "transaction" ("block_timestamp")`);
    await db.query(`CREATE INDEX "idx_transaction_hash" ON "transaction" ("hash")`);
    await db.query(`CREATE INDEX "idx_transaction_to" ON "transaction" ("to")`);
    await db.query(`CREATE INDEX "idx_transaction_from" ON "transaction" ("from")`);

    // ============================
    // HOOK TABLE
    // ============================
    await db.query(`
CREATE TABLE "rental_started_hook" (
    "id" varchar NOT NULL,
    "target" text NOT NULL,
    "item_index" numeric NOT NULL,
    "extra_data" text NOT NULL,
    "rental_started_id" varchar,
    CONSTRAINT "hook_pkey" PRIMARY KEY ("id")
)
`);

    await db.query(`CREATE INDEX "idx_rental_started_hook_rental_started_id" ON "rental_started_hook" ("rental_started_id")`);

    // ============================
    // RENTAL STARTED TABLE
    // ============================
    await db.query(`
CREATE TABLE "rental_started" (
    "id" varchar NOT NULL,
    "network" text NOT NULL,
    "block_number" integer NOT NULL,
    "block_timestamp" TIMESTAMP WITH TIME ZONE NOT NULL,
    "transaction_hash" text NOT NULL,
    "contract" text NOT NULL,
    "event_name" text NOT NULL,
    "order_hash" text NOT NULL,
    "emitted_extra_data" text NOT NULL,
    "seaport_order_hash" text NOT NULL,
    "lender" text NOT NULL,
    "renter" text NOT NULL,
    "rental_wallet" text NOT NULL,
    "end_timestamp" numeric NOT NULL,
    CONSTRAINT "rental_started_pkey" PRIMARY KEY ("id")
)
`);

    await db.query(`CREATE INDEX "idx_rental_started_network" ON "rental_started" ("network")`);
    await db.query(`CREATE INDEX "idx_rental_started_block_timestamp" ON "rental_started" ("block_timestamp")`);
    await db.query(`CREATE INDEX "idx_rental_started_transaction_hash" ON "rental_started" ("transaction_hash")`);
    await db.query(`CREATE INDEX "idx_rental_started_contract" ON "rental_started" ("contract")`);
    await db.query(`CREATE INDEX "idx_rental_started_order_hash" ON "rental_started" ("order_hash")`);
    await db.query(`CREATE INDEX "idx_rental_started_seaport_order_hash" ON "rental_started" ("seaport_order_hash")`);
    await db.query(`CREATE INDEX "idx_rental_started_lender" ON "rental_started" ("lender")`);
    await db.query(`CREATE INDEX "idx_rental_started_renter" ON "rental_started" ("renter")`);
    await db.query(`CREATE INDEX "idx_rental_started_rental_wallet" ON "rental_started" ("rental_wallet")`);

    // ============================
    // ITEM TABLE
    // ============================
    await db.query(`
CREATE TABLE "rental_started_item" (
    "id" varchar NOT NULL,
    "item_type" integer NOT NULL,
    "settle_to" integer NOT NULL,
    "token" text NOT NULL,
    "amount" numeric NOT NULL,
    "identifier" numeric NOT NULL,
    "rental_started_id" varchar,
    CONSTRAINT "item_pkey" PRIMARY KEY ("id")
)
`);

    await db.query(`CREATE INDEX "idx_rental_started_item_rental_started_id" ON "rental_started_item" ("rental_started_id")`);

    // ============================
    // RENTAL STOPPED TABLE
    // ============================
    await db.query(`
CREATE TABLE "rental_stopped" (
    "id" varchar NOT NULL,
    "network" text NOT NULL,
    "block_number" integer NOT NULL,
    "block_timestamp" TIMESTAMP WITH TIME ZONE NOT NULL,
    "transaction_hash" text NOT NULL,
    "contract" text NOT NULL,
    "event_name" text NOT NULL,
    "seaport_order_hash" text NOT NULL,
    "stopper" text NOT NULL,
    CONSTRAINT "rental_stopped_pkey" PRIMARY KEY ("id")
)
`);

    await db.query(`CREATE INDEX "idx_rental_stopped_network" ON "rental_stopped" ("network")`);
    await db.query(`CREATE INDEX "idx_rental_stopped_block_timestamp" ON "rental_stopped" ("block_timestamp")`);
    await db.query(`CREATE INDEX "idx_rental_stopped_transaction_hash" ON "rental_stopped" ("transaction_hash")`);
    await db.query(`CREATE INDEX "idx_rental_stopped_contract" ON "rental_stopped" ("contract")`);
    await db.query(`CREATE INDEX "idx_rental_stopped_seaport_order_hash" ON "rental_stopped" ("seaport_order_hash")`);

    // ============================
    // RENTAL SAFE DEPLOYMENT
    // ============================

    await db.query(`
CREATE TABLE "rental_safe_deployment" (
    "id" varchar NOT NULL,
    "network" text NOT NULL,
    "block_number" integer NOT NULL,
    "block_timestamp" TIMESTAMP WITH TIME ZONE NOT NULL,
    "transaction_hash" text NOT NULL,
    "contract" text NOT NULL,
    "event_name" text NOT NULL,
    "safe" text NOT NULL,
    "owners" text[] NOT NULL,
    "threshold" numeric NOT NULL, 
    CONSTRAINT "rental_safe_deployment_pkey" PRIMARY KEY ("id")
)
`)

    // ============================
    // FOREIGN KEYS
    // ============================
    await db.query(`ALTER TABLE "rental_started_hook" ADD CONSTRAINT "fk_hook_rental_started" FOREIGN KEY ("rental_started_id") REFERENCES "rental_started"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    await db.query(`ALTER TABLE "rental_started_item" ADD CONSTRAINT "fk_item_rental_started" FOREIGN KEY ("rental_started_id") REFERENCES "rental_started"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);

  }

  async down(db) {
    await db.query(`DROP TABLE "block"`);
    await db.query(`DROP TABLE "transaction"`);
    await db.query(`DROP TABLE "hook"`);
    await db.query(`DROP TABLE "rental_started"`);
    await db.query(`DROP TABLE "item"`);
    await db.query(`DROP TABLE "rental_stopped"`);
    await db.query(`DROP TABLE "rental_safe_deployment"`);
  }
};
