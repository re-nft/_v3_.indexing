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
}

export enum NETWORK {
    ETH_SEPOLIA = "eth-sepolia",
    POLYGON_MUMBAI = "polygon-mumbai",
}

export const ETH_SEPOLIA_FROM_BLOCK = 3923754;
export const ETH_SEPOLIA_RENTAL_MANAGER_ADDRESS = "0xea0b609f81b3d7699a970e670ec471daf687e5c2";
export const ETH_SEPOLIA_RENTAL_FACTORY_ADDRESS = "0x2c2bba22aa19ba34bc5ba65e6c35ce54da36a33d";
// TODO:
export const POLYGON_MUMBAI_FROM_BLOCK = 3923754;
export const POLYGON_MUMBAI_RENTAL_MANAGER_ADDRESS = "0x2c2bba22aa19ba34bc5ba65e6c35ce54da36a33d";
export const POLYGON_MUMBAI_RENTAL_FACTORY_ADDRESS = "0x2c2bba22aa19ba34bc5ba65e6c35ce54da36a33d";