import { lookupArchive } from "@subsquid/archive-registry";

import { NETWORK } from "../consts";
import { start } from "../processor";

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
if (!process.env.RPC_POLYGON_MAINNET_HTTP) {
  throw new Error(
    `RPC_POLYGON_MAINNET_HTTP is "${process.env.RPC_POLYGON_MAINNET_HTTP}"`,
  );
}


start({
  dbOptions: { stateSchema: "polygon_mainnet_processor" },
  // https://polygonscan.com/blocks_forked
  finalityConfirmation: 20,
  network: NETWORK.POLYGON_MAINNET,
  createAddress: "0x37B45F0810a0A0fc70B08Eed205cc07E57bD6452",
  stopAddress: "0xFfcF66DE71f13a4823334917A4D5a22302854D3A",
  factoryAddress: "0x061c0aD85Cff923D1f26eF8bc11e32e07e58AFe6",
  source: {
    archive: lookupArchive("polygon", { type: "EVM" }),
    chain: process.env.RPC_POLYGON_MAINNET_HTTP,
  },
  startBlock: 55112484
});
