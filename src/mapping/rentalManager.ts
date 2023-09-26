import {
  type DataHandlerContext,
  type Log,
  type Transaction,
} from "@subsquid/evm-processor";
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
import * as consts from "../consts";

export function parseEvent(
  ctx: DataHandlerContext<Store>,
  log: Log<typeof consts.FIELDS>,
  chain: consts.NETWORK,
): void {
  try {
    switch (log.topics[0]) {
      case spec.events.RentalStarted.topic: {
        const e = spec.events.RentalStarted.decode(log);
        EntityBuffer.add(
          new RentalManagerEventRentalStarted({
            id: log.id,
            network: chain,
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
            network: chain,
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
        address: consts.CONTRACT_ADDRESS[chain][consts.CONTRACT.RENTAL_MANAGER],
      },
      `Unable to decode event "${log.topics[0]}"`,
    );
  }
}

export function parseFunction(
  ctx: DataHandlerContext<Store>,
  transaction: Transaction<typeof consts.FIELDS>,
  chain: consts.NETWORK,
): void {
  try {
    switch (transaction.input.slice(0, 10)) {
      case spec.functions.rentFromZone.sighash: {
        const f = spec.functions.rentFromZone.decode(transaction.input);
        EntityBuffer.add(
          new RentalManagerFunctionRentFromZone({
            id: transaction.id,
            network: chain,
            blockNumber: transaction.block.height,
            blockTimestamp: new Date(transaction.block.timestamp),
            transactionHash: transaction.hash,
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
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
        address: consts.CONTRACT_ADDRESS[chain][consts.CONTRACT.RENTAL_MANAGER],
      },
      `Unable to decode function "${transaction.input.slice(0, 10)}"`,
    );
  }
}
