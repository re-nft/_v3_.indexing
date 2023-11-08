import { type DataHandlerContext, type Log } from "@subsquid/evm-processor";

import * as spec from "../abi/create";
import { type Fields, type NETWORK } from "../consts";
import { type Store } from "../db";
import { EntityBuffer } from "../entityBuffer";
import { RentalStarted } from "../model";
import { randomUUID } from "crypto";

export function parseEvent(
  ctx: DataHandlerContext<Store>,
  log: Log<Fields>,
  chain: NETWORK,
): void {
  try {
    switch (log.topics[0]) {
      case spec.events.RentalOrderStarted.topic: {
        const e = spec.events.RentalOrderStarted.decode(log);
        let rentalStarted = new RentalStarted({
          id: log.id,
          network: chain,
          blockNumber: log.block.height,
          blockTimestamp: new Date(log.block.timestamp),
          transactionHash: log.transactionHash,
          contract: log.address,
          eventName: "RentalOrderStarted",

          orderHash: e[0],
          emittedExtraData: e[1],
          seaportOrderHash: e[2],
          lender: e[5],
          renter: e[6],
          rentalWallet: e[7],
          endTimestamp: e[8],
        });
        const items = e[3].map((item) => ({
          ...item,
          id: randomUUID(),
          rentalStarted: rentalStarted,
        }));
        const hooks = e[4].map((item) => ({
          ...item,
          id: randomUUID(),
          rentalStarted: rentalStarted,
        }));
        // if you change itemType and settleTo fields in schema.graphql
        // to enums, below line will give you a type error
        rentalStarted.items = items;
        rentalStarted.hooks = hooks;
        EntityBuffer.add(rentalStarted);
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
