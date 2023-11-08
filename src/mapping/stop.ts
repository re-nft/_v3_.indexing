import { type DataHandlerContext, type Log } from "@subsquid/evm-processor";

import * as spec from "../abi/stop";
import { type Fields, type NETWORK } from "../consts";
import { type Store } from "../db";
import { EntityBuffer } from "../entityBuffer";
import { RentalStopped } from "../model";

export function parseEvent(
  ctx: DataHandlerContext<Store>,
  log: Log<Fields>,
  chain: NETWORK,
): void {
  try {
    switch (log.topics[0]) {
      case spec.events.RentalOrderStopped.topic: {
        const e = spec.events.RentalOrderStopped.decode(log);
        EntityBuffer.add(
          new RentalStopped({
            id: log.id,
            network: chain,
            blockNumber: log.block.height,
            blockTimestamp: new Date(log.block.timestamp),
            transactionHash: log.transactionHash,
            contract: log.address,
            eventName: "RentalOrderStopped",

            seaportOrderHash: e[0],
            stopper: e[1],
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
        address: log.address,
      },
      `Unable to decode event "${log.topics[0]}"`,
    );
  }
}
