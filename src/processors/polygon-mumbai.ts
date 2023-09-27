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
  finalityConfirmation: 50,
  network: NETWORK.POLYGON_MUMBAI,
  rentalFactoryAddress: "0x9D2068f09D908330cE24887ab3113Ce037EFF26f",
  rentalManagerAddress: "0x7A21CFf58c14FA9c46656dBAa7aA5C569e67f83A",
  source: {
    archive: { name: "polygon-mumbai" },
    rpcUrl: process.env.RPC_POLYGON_TESTNET_HTTP,
  },
  startBlock: 39817388,
});
