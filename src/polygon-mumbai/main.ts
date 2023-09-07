import { rentalFactory, rentalManager } from "../mapping";
import { processor } from "./processor";
import { TypeormDatabase } from "@subsquid/typeorm-store";
import { EntityBuffer } from "../entityBuffer";
import { Block, Transaction } from "../model";
import * as consts from "../consts";

// ! can't find what supportHotBlocks does in docs,
// ! but all subsquid repos set it to true
// ! whereas multichain example that we care about sets it to false
// eslint-disable-next-line max-len
// ! https://github.com/subsquid-labs/multichain-transfers-example/blob/master/src/bsc/main.ts#L6C57-L6C57
processor.run(
  new TypeormDatabase({
    supportHotBlocks: true,
    stateSchema: "polygon_mumbai_processor",
  }),
  async (ctx) => {
    for (const block of ctx.blocks) {
      EntityBuffer.add(
        new Block({
          id: block.header.id,
          network: consts.NETWORK.POLYGON_MUMBAI,
          number: block.header.height,
          timestamp: new Date(block.header.timestamp),
        }),
      );

      for (const log of block.logs) {
        if (log.address === consts.POLYGON_MUMBAI_RENTAL_FACTORY_ADDRESS) {
          rentalFactory.parseEvent(ctx, log, consts.NETWORK.POLYGON_MUMBAI);
        }
        if (log.address === consts.POLYGON_MUMBAI_RENTAL_MANAGER_ADDRESS) {
          rentalManager.parseEvent(ctx, log, consts.NETWORK.POLYGON_MUMBAI);
        }
      }

      for (const transaction of block.transactions) {
        if (transaction.to === consts.POLYGON_MUMBAI_RENTAL_MANAGER_ADDRESS) {
          rentalManager.parseFunction(
            ctx,
            transaction,
            consts.NETWORK.POLYGON_MUMBAI,
          );
        }

        EntityBuffer.add(
          new Transaction({
            id: transaction.id,
            network: consts.NETWORK.POLYGON_MUMBAI,
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
