import { NETWORK } from "../../consts";
import { type EvmIndexerOptions } from "../../processor";

export const config: EvmIndexerOptions = {
  dbOptions: { stateSchema: "eth_sepolia_fork_processor" },
  finalityConfirmation: 1,
  network: NETWORK.ETH_SEPOLIA_FORK,
  rentalFactoryAddress: "0x2c2BBA22aA19Ba34bC5BA65e6c35Ce54DA36A33D",
  rentalManagerAddress: "0xea0b609F81B3D7699a970e670ec471Daf687E5c2",
  source: {
    chain: process.env.RPC_ETH_SEPOLIA_FORK_HTTP ?? "http://127.0.0.1:8545",
  },
  // TODO: explain these magic numbers
  startBlock: 3923754,
};
