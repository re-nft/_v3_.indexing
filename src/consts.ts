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

export enum NETWORK {
  ETH_SEPOLIA = "eth-sepolia",
  POLYGON_MUMBAI = "polygon-mumbai",
}

export enum CONTRACT {
  RENTAL_MANAGER,
  RENTAL_FACTORY,
}

// ! super critical to lower case the addresses, otherwise
// ! it won't index
export const ETH_SEPOLIA_FROM_BLOCK = 3923754;
export const ETH_SEPOLIA_RENTAL_FACTORY_ADDRESS =
  "0x2c2bba22aa19ba34bc5ba65e6c35ce54da36a33d".toLowerCase();
export const ETH_SEPOLIA_RENTAL_MANAGER_ADDRESS =
  "0xea0b609f81b3d7699a970e670ec471daf687e5c2".toLowerCase();

export const POLYGON_MUMBAI_FROM_BLOCK = 39817388;
export const POLYGON_MUMBAI_RENTAL_FACTORY_ADDRESS =
  "0x9D2068f09D908330cE24887ab3113Ce037EFF26f".toLowerCase();
export const POLYGON_MUMBAI_RENTAL_MANAGER_ADDRESS =
  "0x7A21CFf58c14FA9c46656dBAa7aA5C569e67f83A".toLowerCase();

export const CONTRACT_ADDRESS = {
  [NETWORK.ETH_SEPOLIA]: {
    [CONTRACT.RENTAL_MANAGER]: ETH_SEPOLIA_RENTAL_MANAGER_ADDRESS,
    [CONTRACT.RENTAL_FACTORY]: ETH_SEPOLIA_RENTAL_FACTORY_ADDRESS,
  },
  [NETWORK.POLYGON_MUMBAI]: {
    [CONTRACT.RENTAL_MANAGER]: POLYGON_MUMBAI_RENTAL_MANAGER_ADDRESS,
    [CONTRACT.RENTAL_FACTORY]: POLYGON_MUMBAI_RENTAL_FACTORY_ADDRESS,
  },
};
