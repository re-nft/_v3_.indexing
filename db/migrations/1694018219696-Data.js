module.exports = class Data1694018219696 {
    name = 'Data1694018219696'

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

        // ====================
        // TRANSACTION TABLE
        // ====================

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
        await db.query(`CREATE INDEX "idx_transaction_to" ON "transaction" ("to")`);
        await db.query(`CREATE INDEX "idx_transaction_from" ON "transaction" ("from")`);

        // ============================
        // RENTAL FACTORY EVENT TABLE
        // ============================

        await db.query(`
            CREATE TABLE "rental_factory_event_rental_safe_deployment" (
                "id" varchar NOT NULL,
                "network" text NOT NULL,
                "block_number" integer NOT NULL,
                "block_timestamp" TIMESTAMP WITH TIME ZONE NOT NULL,
                "transaction_hash" text NOT NULL,
                "contract" text NOT NULL,
                "event_name" text NOT NULL,
                "safe" text NOT NULL,
                "rental_manager" text NOT NULL,
                "guard" text NOT NULL,
                "owner" text NOT NULL,
                "nonce" numeric NOT NULL,
                CONSTRAINT "rental_factory_event_rental_safe_deployment_pkey" PRIMARY KEY ("id")
            )
        `);

        await db.query(`CREATE INDEX "idx_rental_factory_event_rental_safe_deployment_network" ON "rental_factory_event_rental_safe_deployment" ("network")`);
        await db.query(`CREATE INDEX "idx_rental_factory_event_rental_safe_deployment_block_timestamp" ON "rental_factory_event_rental_safe_deployment" ("block_timestamp")`);
        await db.query(`CREATE INDEX "idx_rental_factory_event_rental_safe_deployment_owner" ON "rental_factory_event_rental_safe_deployment" ("owner")`);

        // ============================
        // RENTAL MANAGER EVENT TABLE
        // ============================

        await db.query(`
            CREATE TABLE "rental_manager_event_rental_started" (
                "id" varchar NOT NULL,
                "network" text NOT NULL,
                "block_number" integer NOT NULL,
                "block_timestamp" TIMESTAMP WITH TIME ZONE NOT NULL,
                "transaction_hash" text NOT NULL,
                "contract" text NOT NULL,
                "event_name" text NOT NULL,
                "seaport_order_hash" text NOT NULL,
                "renter_wallet" text NOT NULL,
                "lender" text NOT NULL,
                "collection" text NOT NULL,
                "token_id" numeric NOT NULL,
                "fulfiller" text NOT NULL,
                "rent_end_timestamp" numeric NOT NULL,
                CONSTRAINT "rental_manager_event_rental_started_pkey" PRIMARY KEY ("id")
            )
        `);

        await db.query(`CREATE INDEX "idx_rental_manager_event_rental_started_network" ON "rental_manager_event_rental_started" ("network")`);
        await db.query(`CREATE INDEX "idx_rental_manager_event_rental_started_block_timestamp" ON "rental_manager_event_rental_started" ("block_timestamp")`);
        await db.query(`CREATE INDEX "idx_rental_manager_event_rental_started_seaport_order_hash" ON "rental_manager_event_rental_started" ("seaport_order_hash")`);
        await db.query(`CREATE INDEX "idx_rental_manager_event_rental_started_renter_wallet" ON "rental_manager_event_rental_started" ("renter_wallet")`);
        await db.query(`CREATE INDEX "idx_rental_manager_event_rental_started_lender" ON "rental_manager_event_rental_started" ("lender")`);
        await db.query(`CREATE INDEX "idx_rental_manager_event_rental_started_collection" ON "rental_manager_event_rental_started" ("collection")`);
    }

    async down(db) {
        await db.query(`DROP TABLE "block"`)
        await db.query(`DROP TABLE "transaction"`)
        await db.query(`DROP TABLE "rental_factory_event_rental_safe_deployment"`)
        await db.query(`DROP TABLE "rental_manager_event_rental_started"`)
    }
}
