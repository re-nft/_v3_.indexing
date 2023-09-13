import { rentalFactory, rentalManager } from "../mapping";
import { processor } from "./processor";
import { TypeormDatabase } from "@subsquid/typeorm-store";
import { EntityBuffer } from "../entityBuffer";
import { Block } from "../model";
import * as consts from "../consts";

// ! there is no clean way to do this
// ! this is squid's team recommendation
process.env.DB_NAME = process.env.V3_DB_NAME;
process.env.DB_HOST = process.env.V3_DB_HOST;
process.env.DB_PORT = process.env.V3_DB_PORT;
process.env.DB_USER = process.env.V3_DB_USER;
process.env.DB_PASS = process.env.V3_DB_PASS;

processor.run(
  new TypeormDatabase({
    supportHotBlocks: true,
    stateSchema: "eth_sepolia_processor",
  }),
  async (ctx) => {
    for (const block of ctx.blocks) {
      EntityBuffer.add(
        new Block({
          id: block.header.id,
          network: consts.NETWORK.ETH_SEPOLIA,
          number: block.header.height,
          timestamp: new Date(block.header.timestamp),
        }),
      );

      for (const log of block.logs) {
        if (log.address === consts.ETH_SEPOLIA_RENTAL_FACTORY_ADDRESS) {
          rentalFactory.parseEvent(ctx, log, consts.NETWORK.ETH_SEPOLIA);
        }
        if (log.address === consts.ETH_SEPOLIA_RENTAL_MANAGER_ADDRESS) {
          rentalManager.parseEvent(ctx, log, consts.NETWORK.ETH_SEPOLIA);
        }
      }
    }

    for (const entities of EntityBuffer.flush()) {
      await ctx.store.insert(entities);
    }
  },
);
