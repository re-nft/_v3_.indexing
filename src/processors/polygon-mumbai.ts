import { lookupArchive } from "@subsquid/archive-registry";

import { NETWORK } from "../consts";
import { start } from "../processor";

// This can be "" | undefined.
// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
if (!process.env.RPC_POLYGON_TESTNET_HTTP) {
  throw new Error(
    `RPC_POLYGON_TESTNET_HTTP is "${process.env.RPC_POLYGON_TESTNET_HTTP}"`,
  );
}

start({
  dbOptions: { stateSchema: "polygon_mumbai_processor" },
  finalityConfirmation: 50,
  network: NETWORK.POLYGON_MUMBAI,
  createAddress: "0x8fa566b4441aE0b5Dd16d912246193485eB667c3",
  stopAddress: "0x7832906C3340533a01d60D0eb38a6E80D9275d86",
  source: {
    archive: lookupArchive("polygon-mumbai", { type: "EVM" }),
    chain: process.env.RPC_POLYGON_TESTNET_HTTP,
  },
  // block number where both rental factory and rental manager were deployed
  startBlock: 41452693,
});
