import { lookupArchive } from "@subsquid/archive-registry";

import { NETWORK } from "../consts";
import { start } from "../processor";

// This can be "" | undefined.
// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
if (!process.env.RPC_ETH_SEPOLIA_HTTP) {
  throw new Error(
    `RPC_ETH_SEPOLIA_HTTP is "${process.env.RPC_ETH_SEPOLIA_HTTP}"`,
  );
}

start({
  dbOptions: { stateSchema: "eth_sepolia_processor" },
  // I went through forked blocks here:
  // https://sepolia.etherscan.io/blocks_forked?p=1 and I could only find one
  // case where re-org depth exceeded 5 blocks: 22 blocks if re-org happens, I
  // am not sure about this, because squid is supposed to handle automatically,
  // but if error happens, all we would have to do is re-run / re-deploy the
  // squid. So re-deploying once a year (for sepolia) is fine.
  finalityConfirmation: 6,
  network: NETWORK.ETH_SEPOLIA,
  createAddress: "0x5611e4Db722f4a125D88F202A4C3e5F8cBc85F27",
  stopAddress: "0x0444B6f065758F3c12579418DE4d6050c674A704",
  source: {
    archive: lookupArchive("sepolia", { type: "EVM" }),
    chain: process.env.RPC_ETH_SEPOLIA_HTTP,
  },
  // block number where both rental factory and rental manager were deployed
  startBlock: 4530351,
});
