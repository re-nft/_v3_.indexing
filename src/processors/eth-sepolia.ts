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

// TODO: consider abstracting this out and having it in each processor
// --to-block is optional
// it's useful when you want to initialise the db with some pre-determined
// data and not index everything
// to use it: `sqd process:eth-sepolia --to-block=4654950`
const args = process.argv.slice(2); // skip node and script path
const toBlockArg = args.find((arg) => arg.startsWith("--to-block="));
const endBlock = toBlockArg ? Number(toBlockArg.split("=")[1]) : undefined;

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
  createAddress: "0xced95c21500c0ffb977f9a8a9b656164a41630c1",
  stopAddress: "0x013c420fbb9bfa135f8fcecfbcfa70a577f0b4fa",
  factoryAddress: "0xe06aed5d2f5c2624ded4a6413e67cd7caf7bb3ac",
  source: {
    archive: lookupArchive("sepolia", { type: "EVM" }),
    chain: process.env.RPC_ETH_SEPOLIA_HTTP,
  },
  // block number where both rental factory and rental manager were deployed
  startBlock: 5511921,
  endBlock
});
