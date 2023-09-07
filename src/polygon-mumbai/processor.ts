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
import * as consts from "../consts";

export const processor = new EvmBatchProcessor()
  .setDataSource({
    archive: lookupArchive("polygon-mumbai", { type: "EVM" }),
    chain: process.env.RPC_POLYGON_TESTNET_HTTP,
  })
  .setFinalityConfirmation(50)
  .setFields(consts.FIELDS)
  .addLog({
    address: [consts.POLYGON_MUMBAI_RENTAL_FACTORY_ADDRESS],
    topic0: [rentalFactoryAbi.events.RentalSafeDeployment.topic],
    range: {
      from: consts.POLYGON_MUMBAI_FROM_BLOCK,
    },
  })
  .addLog({
    address: [consts.POLYGON_MUMBAI_RENTAL_MANAGER_ADDRESS],
    topic0: [
      rentalManagerAbi.events.RentalStarted.topic,
      rentalManagerAbi.events.RentalStopped.topic,
    ],
    range: {
      from: consts.POLYGON_MUMBAI_FROM_BLOCK,
    },
  })
  .addTransaction({
    to: [consts.POLYGON_MUMBAI_RENTAL_MANAGER_ADDRESS],
    sighash: [
      rentalManagerAbi.functions.rentFromZone.sighash,
      // rentalManagerAbi.functions.setZone.sighash,
    ],
    range: {
      from: consts.POLYGON_MUMBAI_FROM_BLOCK,
    },
  });

export type Fields = EvmBatchProcessorFields<typeof processor>;
export type Block = BlockHeader<Fields>;
export type Log = _Log<Fields>;
export type Transaction = _Transaction<Fields>;
