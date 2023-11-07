import { NETWORK } from "../../consts";
import { type EvmIndexerOptions } from "../../processor";

export const config: EvmIndexerOptions = {
  dbOptions: { stateSchema: "eth_sepolia_fork_processor" },
  finalityConfirmation: 1,
  network: NETWORK.ETH_SEPOLIA_FORK,
  createAddress: "0x5611e4Db722f4a125D88F202A4C3e5F8cBc85F27",
  stopAddress: "0x0444B6f065758F3c12579418DE4d6050c674A704",
  source: {
    chain: process.env.RPC_ETH_SEPOLIA_FORK_HTTP ?? "http://127.0.0.1:8545",
  },
  // block number where both rental factory and rental manager were deployed
  startBlock: 4530351,
};
