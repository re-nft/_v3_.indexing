import {
  EvmBatchProcessor,
  type EvmBatchProcessorFields,
  type BlockHeader,
  type Log as _Log,
  type Transaction as _Transaction,
} from "@subsquid/evm-processor";
import { lookupArchive } from "@subsquid/archive-registry";
import * as rentalFactoryAbi from "../abi/rental-factory";
import * as rentalManagerAbi from "../abi/rental-manager";

export const processor = new EvmBatchProcessor()
  .setDataSource({
    archive: lookupArchive("sepolia", { type: "EVM" }),
  })
  .setFields({
    log: {
      topics: true,
      data: true,
      transactionHash: true,
    },
    transaction: {
      hash: true,
      input: true,
      from: true,
      value: true,
      status: true,
    },
  })
  .addLog({
    address: ["0x2c2bba22aa19ba34bc5ba65e6c35ce54da36a33d"],
    topic0: [rentalFactoryAbi.events.RentalSafeDeployment.topic],
    range: {
      from: 3923754,
    },
  })
  .addLog({
    address: ["0xea0b609f81b3d7699a970e670ec471daf687e5c2"],
    topic0: [
      rentalManagerAbi.events.RentalStarted.topic,
      rentalManagerAbi.events.RentalStopped.topic,
    ],
    range: {
      from: 3923754,
    },
  })
  .addTransaction({
    to: ["0xea0b609f81b3d7699a970e670ec471daf687e5c2"],
    sighash: [
      rentalManagerAbi.functions.rentFromZone.sighash,
      rentalManagerAbi.functions.setZone.sighash,
    ],
    range: {
      from: 3923754,
    },
  });

export type Fields = EvmBatchProcessorFields<typeof processor>;
export type Block = BlockHeader<Fields>;
export type Log = _Log<Fields>;
export type Transaction = _Transaction<Fields>;
