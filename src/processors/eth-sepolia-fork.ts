// Keeping this around for reference. See commented out `archive` option below.
// eslint-disable-next-line
import { lookupArchive } from "@subsquid/archive-registry";

import { NETWORK } from "../consts";
import { start } from "../processor";

// TODO: make this a two-pass process where first we index from startBlock to
// endBlock on the `archive` and afterwards start a processer on the `chain`.
start({
  dbOptions: { stateSchema: "eth_sepolia_fork_processor" },
  finalityConfirmation: 1,
  network: NETWORK.ETH_SEPOLIA_FORK,
  rentalFactoryAddress: "0x2c2BBA22aA19Ba34bC5BA65e6c35Ce54DA36A33D",
  rentalManagerAddress: "0xea0b609F81B3D7699a970e670ec471Daf687E5c2",
  source: {
    // archive: lookupArchive("sepolia", { type: "EVM" }),
    chain: process.env.RPC_ETH_SEPOLIA_FORK_HTTP ?? "http://127.0.0.1:8545",
  },
  // TODO: explain these magic numbers
  startBlock: 3923754,
  // endBlock: 4094014,
});
