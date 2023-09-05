import { rentalFactory, rentalManager } from "../mapping";
import { processor } from "./processor";
// import { db, Store } from "../db";
import { db } from "../db";
import { EntityBuffer } from "../entityBuffer";
import { Block, Transaction } from "../model";
import * as consts from "../consts";

processor.run(db, async (ctx) => {
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
});
