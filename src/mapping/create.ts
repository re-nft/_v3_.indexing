import { type DataHandlerContext, type Log } from "@subsquid/evm-processor";

import * as spec from "../abi/create";
import { type Fields, type NETWORK } from "../consts";
import { type Store } from "../db";
import { EntityBuffer } from "../entityBuffer";
import { RentalStarted, RentalStartedHook, RentalStartedItem } from "../model";

export function parseEvent(
  ctx: DataHandlerContext<Store>,
  log: Log<Fields>,
  chain: NETWORK,
): void {
  try {
    switch (log.topics[0]) {
      case spec.events.RentalOrderStarted.topic: {
        let [
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

          orderHash: orderHash.toLowerCase(),
          emittedExtraData: emittedExtraData.toLowerCase(),
          seaportOrderHash: seaportOrderHash.toLowerCase(),
          lender: lender.toLowerCase(),
          renter: renter.toLowerCase(),
          rentalWallet: rentalWallet.toLowerCase(),
          endTimestamp,
        });

        rentalStarted.items = items.map(
          ([itemType, settleTo, token, amount, identifier], index) =>
            new RentalStartedItem({
              id: `${log.id}::${index}`,
              amount,
              identifier,
              itemType,
              rentalStarted,
              settleTo,
              token: token.toLowerCase(),
            }),
        );
        // Unsure whether this struct is has the right model
        rentalStarted.hooks = hooks.map(
          ([target, itemIndex, extraData], index) =>
            new RentalStartedHook({
              id: `${log.id}::${index}`,
              extraData: extraData.toLowerCase(),
              itemIndex,
              target: target.toLowerCase(),
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
