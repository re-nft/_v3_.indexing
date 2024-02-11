import { type DataHandlerContext, type Log } from "@subsquid/evm-processor";

import * as spec from "../abi/factory";
import { type Fields, type NETWORK } from "../consts";
import { type Store } from "../db";
import { EntityBuffer } from "../entityBuffer";
import { RentalSafeDeployment } from "../model";

export function parseEvent(
  ctx: DataHandlerContext<Store>,
  log: Log<Fields>,
  chain: NETWORK,
): void {
  try {
    switch (log.topics[0]) {
      case spec.events.RentalSafeDeployment.topic: {
        const [safe, owners, threshold] = spec.events.RentalSafeDeployment
          .decode(log);
        console.log(`safe deployment indexed. safe: ${safe}, threshold: ${threshold}`);
        EntityBuffer.add(
          new RentalSafeDeployment({
            id: log.id,
            network: chain,
            blockNumber: log.block.height,
            blockTimestamp: new Date(log.block.timestamp),
            transactionHash: log.transactionHash,
            contract: log.address,
            eventName: "RentalSafeDeployment",

            safe: safe.toLowerCase(),
            owners: owners.map((owner) => (owner.toLowerCase())),
            threshold,
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
