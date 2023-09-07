import { rentalFactory, rentalManager } from "../mapping";
import { processor } from "./processor";
import { TypeormDatabase } from "@subsquid/typeorm-store";
import { EntityBuffer } from "../entityBuffer";
import { Block, Transaction } from "../model";
import * as consts from "../consts";

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

      for (const transaction of block.transactions) {
        if (transaction.to === consts.ETH_SEPOLIA_RENTAL_MANAGER_ADDRESS) {
          rentalManager.parseFunction(
            ctx,
            transaction,
            consts.NETWORK.ETH_SEPOLIA,
          );
        }

        EntityBuffer.add(
          new Transaction({
            id: transaction.id,
            network: consts.NETWORK.ETH_SEPOLIA,
            blockNumber: block.header.height,
            blockTimestamp: new Date(block.header.timestamp),
            hash: transaction.hash,
            to: transaction.to,
            from: transaction.from,
            status: transaction.status,
          }),
        );
      }
    }

    for (const entities of EntityBuffer.flush()) {
      await ctx.store.insert(entities);
    }
  },
);
