import { rentalFactory, rentalManager } from "./mapping";
import {
  type TypeormDatabaseOptions,
  TypeormDatabase,
} from "@subsquid/typeorm-store";
import { EntityBuffer } from "./entityBuffer";
import { Block } from "./model";

import { EvmBatchProcessor } from "@subsquid/evm-processor";
import {
  type KnownArchivesEVM,
  type LookupOptionsEVM,
  lookupArchive,
} from "@subsquid/archive-registry";
import * as rentalFactoryAbi from "./abi/rental-factory";
import * as rentalManagerAbi from "./abi/rental-manager";
import * as consts from "./consts";

// ! there is no clean way to do this
// ! this is squid's team recommendation
process.env.DB_NAME = process.env.V3_DB_NAME;
process.env.DB_HOST = process.env.V3_DB_HOST;
process.env.DB_PORT = process.env.V3_DB_PORT;
process.env.DB_USER = process.env.V3_DB_USER;
process.env.DB_PASS = process.env.V3_DB_PASS;

interface EvmIndexerOptions {
  dbOptions: TypeormDatabaseOptions;
  finalityConfirmation: number;
  network: consts.NETWORK;
  rentalFactoryAddress: string;
  rentalManagerAddress: string;
  source: {
    archive:
      | string
      | {
          name: KnownArchivesEVM;
          options?: LookupOptionsEVM;
        };
    rpcUrl: string;
  };
  startBlock: number;
}

export function start({
  dbOptions,
  finalityConfirmation,
  network,
  rentalFactoryAddress,
  rentalManagerAddress,
  source,
  startBlock,
}: EvmIndexerOptions): void {
  const processor = new EvmBatchProcessor()
    .setDataSource({
      archive:
        typeof source.archive === "string"
          ? source.archive
          : lookupArchive(source.archive.name, {
              type: "EVM",
              ...source.archive.options,
            }),
      chain: source.rpcUrl,
    })
    .setFinalityConfirmation(finalityConfirmation)
    .setFields(consts.FIELDS)
    .addLog({
      address: [rentalFactoryAddress.toLowerCase()],
      topic0: [rentalFactoryAbi.events.RentalSafeDeployment.topic],
      range: { from: startBlock },
    })
    .addLog({
      address: [rentalManagerAddress.toLowerCase()],
      topic0: [
        rentalManagerAbi.events.RentalStarted.topic,
        rentalManagerAbi.events.RentalStopped.topic,
      ],
      range: { from: startBlock },
    });

  const logParsers = {
    [rentalFactoryAddress]: rentalFactory.parseEvent,
    [rentalManagerAddress]: rentalManager.parseEvent,
  };

  processor.run(
    new TypeormDatabase({ supportHotBlocks: true, ...dbOptions }),
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
          logParsers[log.address]?.(ctx, log, network);
        }
      }

      for (const entities of EntityBuffer.flush()) {
        await ctx.store.insert(entities);
      }
    },
  );
}
