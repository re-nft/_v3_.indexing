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

// ! there is no clean way to do this
// ! this is squid's team recommendation
process.env.DB_NAME = process.env.V3_DB_NAME;
process.env.DB_HOST = process.env.V3_DB_HOST;
process.env.DB_PORT = process.env.V3_DB_PORT;
process.env.DB_USER = process.env.V3_DB_USER;
process.env.DB_PASS = process.env.V3_DB_PASS;

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
  });

export type Fields = EvmBatchProcessorFields<typeof processor>;
export type Block = BlockHeader<Fields>;
export type Log = _Log<Fields>;
export type Transaction = _Transaction<Fields>;
