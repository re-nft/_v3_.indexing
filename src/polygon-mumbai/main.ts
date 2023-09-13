import { rentalFactory, rentalManager } from "../mapping";
import { processor } from "./processor";
import { TypeormDatabase } from "@subsquid/typeorm-store";
import { EntityBuffer } from "../entityBuffer";
import { Block } from "../model";
import * as consts from "../consts";

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
    }

    for (const entities of EntityBuffer.flush()) {
      await ctx.store.insert(entities);
    }
  },
);
