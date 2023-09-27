import { NETWORK } from "../consts";
import { start } from "../processor";

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
  rentalFactoryAddress: "0x2c2BBA22aA19Ba34bC5BA65e6c35Ce54DA36A33D",
  rentalManagerAddress: "0xea0b609F81B3D7699a970e670ec471Daf687E5c2",
  source: {
    chain: process.env.RPC_ETH_SEPOLIA_HTTP_LOCAL ?? "http://localhost:8545",
  },
  startBlock: 4374934,
});
