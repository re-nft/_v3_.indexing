import { type DataHandlerContext, type Log } from "@subsquid/evm-processor";
import { randomUUID } from "crypto";

import * as spec from "../abi/create";
import { type Fields, type NETWORK } from "../consts";
import { type Store } from "../db";
import { EntityBuffer } from "../entityBuffer";
import { Hook, Item, RentalStarted } from "../model";

export function parseEvent(
  ctx: DataHandlerContext<Store>,
  log: Log<Fields>,
  chain: NETWORK,
): void {
  try {
    switch (log.topics[0]) {
      case spec.events.RentalOrderStarted.topic: {
        const [
          orderHash,
          emittedExtraData,
          seaportOrderHash,
          items,
          hooks,
          lender,
          renter,
          rentalWallet,
          endTimestamp,
        ] = spec.events.RentalOrderStarted.decode(log);

        const rentalStarted = new RentalStarted({
          id: log.id,
          network: chain,
          blockNumber: log.block.height,
          blockTimestamp: new Date(log.block.timestamp),
          transactionHash: log.transactionHash,
          contract: log.address,
          eventName: "RentalOrderStarted",

          orderHash,
          emittedExtraData,
          seaportOrderHash,
          lender,
          renter,
          rentalWallet,
          endTimestamp,
        });

        rentalStarted.items = items.map(
          ([itemType, settleTo, token, amount, identifier]) =>
            new Item({
              id: randomUUID(),
              amount,
              identifier,
              itemType,
              rentalStarted,
              settleTo,
              token,
            }),
        );
        // Unsure whether this struct is has the right model
        rentalStarted.hooks = hooks.map(
          ([target, itemIndex, extraData]) =>
            new Hook({
              id: randomUUID(),
              extraData,
              itemIndex,
              target,
              rentalStarted,
            }),
        );

        [rentalStarted, ...rentalStarted.items, ...rentalStarted.hooks].forEach(
          (entity) => {
            EntityBuffer.add(entity);
          },
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
