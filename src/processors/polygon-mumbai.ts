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
  createAddress: "0x147e8d0CDb93f766298a285F4dD595a87e806043",
  stopAddress: "0xFD2107B5C26B46eb3C1E22596337b625c5AA5990",
  factoryAddress: "0x0B8Ca05F35172DA06E06Abd676E27Fe9be448770",
  source: {
    archive: lookupArchive("polygon-mumbai", { type: "EVM" }),
    chain: process.env.RPC_POLYGON_TESTNET_HTTP,
  },
  // block number where both rental factory and rental manager were deployed
  startBlock: 42157940,
});
