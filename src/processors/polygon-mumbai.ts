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
  // DONT TOUCH finalityConfirmation
  finalityConfirmation: 200,
  network: NETWORK.POLYGON_MUMBAI,
  createAddress: "0x77Bf6E3Fb58B9635e6d1A2112096Ef543a93C6b8",
  stopAddress: "0x856f90Cd46401F2376f32206E6785bE95F82F609",
  factoryAddress: "0x5D7b2aa451020e01F4e53fd7887F6c96F51A5806",
  source: {
    archive: "https://v2.archive.subsquid.io/network/polygon-testnet",
    chain: process.env.RPC_POLYGON_TESTNET_HTTP,
  },
  // block number where both rental factory and rental manager were deployed
  startBlock: 42199414,
});
