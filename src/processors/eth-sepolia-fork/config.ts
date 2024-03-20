import { NETWORK } from "../../consts";
import { type EvmIndexerOptions } from "../../processor";

export const config: EvmIndexerOptions = {
  dbOptions: { stateSchema: "eth_sepolia_fork_processor" },
  // DO NOT CHANGE THIS TO ANY OTHER NUMBER
  // YOUR FORK INDEXING WILL BECOME FLAKY AND WILL NOT WORK
  finalityConfirmation: 0,
  network: NETWORK.ETH_SEPOLIA_FORK,
  createAddress: "0xced95c21500c0ffb977f9a8a9b656164a41630c1",
  stopAddress: "0x013c420fbb9bfa135f8fcecfbcfa70a577f0b4fa",
  factoryAddress: "0xe06aed5d2f5c2624ded4a6413e67cd7caf7bb3ac",
  source: {
    chain: process.env.RPC_ETH_SEPOLIA_FORK_HTTP ?? "http://127.0.0.1:8545",
  },
  // if you fork anvil at block number x, then startBlock here must be x + 1
  // otherwise you will get an error like:
  //
  // "Seems like the chain node navigated to another branch while we were fetching block x"
  startBlock: 5511921,
};
