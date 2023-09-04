import { rentalFactory, rentalManager } from "../mapping";
import { processor } from "./processor";
import { db, Store } from "../db";
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
      if (log.address === "0x2c2bba22aa19ba34bc5ba65e6c35ce54da36a33d") {
        rentalFactory.parseEvent(ctx, log);
      }
      if (log.address === "0xea0b609f81b3d7699a970e670ec471daf687e5c2") {
        rentalManager.parseEvent(ctx, log);
      }
    }

    for (const transaction of block.transactions) {
    //   if (transaction.to === "0x2c2bba22aa19ba34bc5ba65e6c35ce54da36a33d") {
    //     rentalFactory.parseFunction(ctx, transaction);
    //   }
      if (transaction.to === "0xea0b609f81b3d7699a970e670ec471daf687e5c2") {
        rentalManager.parseFunction(ctx, transaction);
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
