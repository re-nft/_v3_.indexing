import { lookupArchive } from "@subsquid/archive-registry";

import { start } from "../../processor";
import { config } from "./config";

start({
  ...config,
  source: { archive: lookupArchive("sepolia", { type: "EVM" }) },
  // TODO: explain these magic numbers
  endBlock: 4094014,
});
