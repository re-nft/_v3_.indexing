import { type DataHandlerContext } from "@subsquid/evm-processor";
import { type Store } from "../db";
import { EntityBuffer } from "../entityBuffer";
import { RentalFactoryEventRentalSafeDeployment } from "../model";
import * as spec from "../abi/rental-factory";
// ! both eth-sepolia and polygon-mumbai are identical
// ! therefore it is OK to do this
import { type Log } from "../eth-sepolia/processor";

// TODO: this address depends on the network, might want to add another arg on this function
// TODO: or add network to context
const address = "0x2c2bba22aa19ba34bc5ba65e6c35ce54da36a33d";

export function parseEvent(ctx: DataHandlerContext<Store>, log: Log) {
  try {
    switch (log.topics[0]) {
      case spec.events.RentalSafeDeployment.topic: {
        const e = spec.events.RentalSafeDeployment.decode(log);
        EntityBuffer.add(
          new RentalFactoryEventRentalSafeDeployment({
            id: log.id,
            blockNumber: log.block.height,
            blockTimestamp: new Date(log.block.timestamp),
            transactionHash: log.transactionHash,
            contract: log.address,
            eventName: "RentalSafeDeployment",
            safe: e[0],
            rentalManager: e[1],
            guard: e[2],
            owner: e[3],
            nonce: e[4],
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
