export const FIELDS = {
  log: {
    topics: true,
    data: true,
    transactionHash: true,
  },
  transaction: {
    hash: true,
    input: true,
    from: true,
    value: true,
    status: true,
  },
};

export type Fields = typeof FIELDS;

export enum NETWORK {
  ETH_MAINNET = "eth-mainnet",
  ETH_SEPOLIA = "eth-sepolia",
  ETH_SEPOLIA_FORK = "eth-sepolia-fork",
  POLYGON_MUMBAI = "polygon-mumbai",
  POLYGON_MAINNET = "polygon-mainnet"
}
