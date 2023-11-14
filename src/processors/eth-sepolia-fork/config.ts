import { NETWORK } from "../../consts";
import { type EvmIndexerOptions } from "../../processor";

export const config: EvmIndexerOptions = {
  dbOptions: { stateSchema: "eth_sepolia_fork_processor" },
  // DO NOT CHANGE THIS TO ANY OTHER NUMBER
  // YOUR FORK INDEXING WILL BECOME FLAKY AND WILL NOT WORK
  finalityConfirmation: 0,
  network: NETWORK.ETH_SEPOLIA_FORK,
  createAddress: "0xc60f6eb59002a4F71A3e34d2C5Bf9c244D42BD68",
  stopAddress: "0xa95BC23c95e62Dd0a9dc85790e45423C98069546",
  factoryAddress: "0xdab133e1E2B1610deb14419715Dcce7261C17293",
  source: {
    chain: process.env.RPC_ETH_SEPOLIA_FORK_HTTP ?? "http://127.0.0.1:8545",
  },
  // if you fork anvil at block number x, then startBlock here must be x + 1
  // otherwise you will get an error like:
  //
  // "Seems like the chain node navigated to another branch while we were fetching block x"
  startBlock: 4661045,
};
