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
  createAddress: "0xAdfFEd1E9D37c640D8490A4F7e34EC82170B4D40",
  stopAddress: "0x490A8fA35ff1cBa261593ecE604282Ff6fb9737b",
  factoryAddress: "0x112b10c90494a3ba47FBD0076e99d8e924378661",
  source: {
    archive: lookupArchive("sepolia", { type: "EVM" }),
    chain: process.env.RPC_ETH_SEPOLIA_HTTP,
  },
  // block number where both rental factory and rental manager were deployed
  startBlock: 4654687,
});
