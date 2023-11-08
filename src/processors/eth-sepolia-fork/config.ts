import { NETWORK } from "../../consts";
import { type EvmIndexerOptions } from "../../processor";

export const config: EvmIndexerOptions = {
  dbOptions: { stateSchema: "eth_sepolia_fork_processor" },
  finalityConfirmation: 1,
  network: NETWORK.ETH_SEPOLIA_FORK,
  createAddress: "0xAdfFEd1E9D37c640D8490A4F7e34EC82170B4D40",
  stopAddress: "0x490A8fA35ff1cBa261593ecE604282Ff6fb9737b",
  factoryAddress: "0x112b10c90494a3ba47FBD0076e99d8e924378661",
  source: {
    chain: process.env.RPC_ETH_SEPOLIA_FORK_HTTP ?? "http://127.0.0.1:8545",
  },
  // TODO: don't need to break up indexing into two parts
  // unless you really need to index testnet data
  // which you don't need to
  // block number where both rental factory and rental manager were deployed
  startBlock: 4654687,
};
