import { type DataHandlerContext } from "@subsquid/evm-processor";
import { toJSON } from "@subsquid/util-internal-json";
import { type Store } from "../db";
import { EntityBuffer } from "../entityBuffer";
import {
  RentalManagerEventRentalStarted,
  RentalManagerEventRentalStopped,
  RentalManagerFunctionRentFromZone,
//   RentalManagerFunctionSetZone,
} from "../model";
import * as spec from "../abi/rental-manager";
// ! both eth-sepolia and polygon-mumbai are identical
// ! therefore it is OK to do this
import { type Log, type Transaction } from "../eth-sepolia/processor";

// TODO: this address depends on the network, might want to add another arg on this function
// TODO: or add network to context
const address = "0xea0b609f81b3d7699a970e670ec471daf687e5c2";

export function parseEvent(ctx: DataHandlerContext<Store>, log: Log) {
  try {
    switch (log.topics[0]) {
      case spec.events.RentalStarted.topic: {
        const e = spec.events.RentalStarted.decode(log);
        EntityBuffer.add(
          new RentalManagerEventRentalStarted({
            id: log.id,
            blockNumber: log.block.height,
            blockTimestamp: new Date(log.block.timestamp),
            transactionHash: log.transactionHash,
            contract: log.address,
            eventName: "RentalStarted",
            seaportOrderHash: e[0],
            renterWallet: e[1],
            lender: e[2],
            collection: e[3],
            tokenId: e[4],
            fulfiller: e[5],
            rentEndTimestamp: e[6],
          }),
        );
        break;
      }
      case spec.events.RentalStopped.topic: {
        const e = spec.events.RentalStopped.decode(log);
        EntityBuffer.add(
          new RentalManagerEventRentalStopped({
            id: log.id,
            blockNumber: log.block.height,
            blockTimestamp: new Date(log.block.timestamp),
            transactionHash: log.transactionHash,
            contract: log.address,
            eventName: "RentalStopped",
            seaportOrderHash: e[0],
            renterWallet: e[1],
            lender: e[2],
            collection: e[3],
            tokenId: e[4],
            stopper: e[5],
          }),
        );
        break;
      }
    }
  } catch (error) {
    ctx.log.error(
      {
        error,
        blockNumber: log.block.height,
        blockHash: log.block.hash,
        address,
      },
      `Unable to decode event "${log.topics[0]}"`,
    );
  }
}

export function parseFunction(
  ctx: DataHandlerContext<Store>,
  transaction: Transaction,
) {
  try {
    switch (transaction.input.slice(0, 10)) {
      case spec.functions.rentFromZone.sighash: {
        const f = spec.functions.rentFromZone.decode(transaction.input);
        EntityBuffer.add(
          new RentalManagerFunctionRentFromZone({
            id: transaction.id,
            blockNumber: transaction.block.height,
            blockTimestamp: new Date(transaction.block.timestamp),
            transactionHash: transaction.hash,
            contract: transaction.to!,
            functionName: "rentFromZone",
            functionValue: transaction.value,
            functionSuccess:
              transaction.status != null
                ? Boolean(transaction.status)
                : undefined,
            payload: toJSON(f[0]),
            seaportOrderHash: f[1],
            seaportZoneHash: f[2],
            offer: toJSON(f[3]),
            consideration: toJSON(f[4]),
            seaportFulfiller: f[5],
            offerer: f[6],
            signature: f[7],
          }),
        );
        break;
      }
    }
  } catch (error) {
    ctx.log.error(
      {
        error,
        blockNumber: transaction.block.height,
        blockHash: transaction.block.hash,
        address,
      },
      `Unable to decode function "${transaction.input.slice(0, 10)}"`,
    );
  }
}
