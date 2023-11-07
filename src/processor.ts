import { type DataSource, EvmBatchProcessor } from "@subsquid/evm-processor";
import {
  TypeormDatabase,
  type TypeormDatabaseOptions,
} from "@subsquid/typeorm-store";

import * as createAbi from "./abi/create";
import * as stopAbi from "./abi/stop";
import * as consts from "./consts";
import { EntityBuffer } from "./entityBuffer";
import { create, stop } from "./mapping";
import { Block } from "./model";

// ! there is no clean way to do this
// ! this is squid's team recommendation
process.env.DB_NAME = process.env.V3_DB_NAME;
process.env.DB_HOST = process.env.V3_DB_HOST;
process.env.DB_PORT = process.env.V3_DB_PORT;
process.env.DB_USER = process.env.V3_DB_USER;
process.env.DB_PASS = process.env.V3_DB_PASS;

export interface EvmIndexerOptions {
  dbOptions: TypeormDatabaseOptions;
  finalityConfirmation: number;
  network: consts.NETWORK;
  createAddress: string;
  stopAddress: string;
  source: DataSource;
  startBlock: number;
  endBlock?: number;
}

export function start({
  dbOptions,
  finalityConfirmation,
  network,
  createAddress: rawCreateAddress,
  stopAddress: rawStopAddress,
  source,
  startBlock,
  endBlock,
}: EvmIndexerOptions): void {
  // ! super critical to lower case the addresses, otherwise it won't index
  const createAddress = rawCreateAddress.toLowerCase();
  const stopAddress = rawStopAddress.toLowerCase();

  const processor = new EvmBatchProcessor()
    .setDataSource(source)
    .setFinalityConfirmation(finalityConfirmation)
    .setFields(consts.FIELDS)
    .addLog({
      address: [createAddress],
      topic0: [createAbi.events.RentalOrderStarted.topic],
      range: { from: startBlock, to: endBlock },
    })
    .addLog({
      address: [stopAddress],
      topic0: [
        stopAbi.events.RentalOrderStopped.topic,
      ],
      range: { from: startBlock, to: endBlock },
    });

  const logParsers = {
    [createAddress]: create.parseEvent,
    [stopAddress]: stop.parseEvent,
  };

  processor.run(
    new TypeormDatabase({ supportHotBlocks: true, ...dbOptions }),
    async (ctx) => {
      for (const block of ctx.blocks) {
        EntityBuffer.add(
          new Block({
            id: block.header.id,
            network,
            number: block.header.height,
            timestamp: new Date(block.header.timestamp),
          }),
        );

        for (const log of block.logs) {
          logParsers[log.address]?.(ctx, log, network);
        }
      }

      for (const entities of EntityBuffer.flush()) {
        await ctx.store.insert(entities);
      }
    },
  );
}
