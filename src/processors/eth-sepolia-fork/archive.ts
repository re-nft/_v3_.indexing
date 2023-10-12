import { lookupArchive } from "@subsquid/archive-registry";

import { start } from "../../processor";
import { config } from "./config";

start({
  // startBlock gets inherited from config
  ...config,
  source: { archive: lookupArchive("sepolia", { type: "EVM" }) },
  // we fork at this block number. if you fork at a different block
  // number then you will need to change this
  endBlock: 4094014,
});
