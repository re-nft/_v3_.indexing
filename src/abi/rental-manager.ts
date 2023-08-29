import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './rental-manager.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    ModuleDewhitelisted: new LogEvent<([module: string, dewhitelister: string] & {module: string, dewhitelister: string})>(
        abi, '0xc5a087c9494a273fa648336d9d2264400061786639dcb08bbe63aa1dae8aeca6'
    ),
    ModuleWhitelisted: new LogEvent<([module: string, whitelister: string] & {module: string, whitelister: string})>(
        abi, '0x8d0fbc260e446a5563b7f946780254e1707f4e5a54a37f2bee1a76232f4e5b8e'
    ),
    RentalStarted: new LogEvent<([seaportOrderHash: string, renterWallet: string, lender: string, collection: string, tokenId: bigint, fulfiller: string, rentEndTimestamp: bigint] & {seaportOrderHash: string, renterWallet: string, lender: string, collection: string, tokenId: bigint, fulfiller: string, rentEndTimestamp: bigint})>(
        abi, '0xf79ab1e477d847d3cf253e70fb6ea86235b640141a56121a21ad3d66bf030442'
    ),
    RentalStopped: new LogEvent<([seaportOrderHash: string, renterWallet: string, lender: string, collection: string, tokenId: bigint, stopper: string] & {seaportOrderHash: string, renterWallet: string, lender: string, collection: string, tokenId: bigint, stopper: string})>(
        abi, '0x57701ff0e63c4344dd6077818dd0eedfae332d884a870954301bf667f5ae017c'
    ),
}

export const functions = {
    admin: new Func<[], {}, string>(
        abi, '0xf851a440'
    ),
    assetIdToSeaportOrderHash: new Func<[assetId: string], {assetId: string}, string>(
        abi, '0x346b7259'
    ),
    dewhitelistModule: new Func<[module: string], {module: string}, []>(
        abi, '0xc0817d73'
    ),
    domainSeparator: new Func<[], {}, string>(
        abi, '0xf698da25'
    ),
    getRentPayloadHash: new Func<[payload: ([fulfillment: ([fulfiller: number, recipient: string, rentDurationInSeconds: bigint] & {fulfiller: number, recipient: string, rentDurationInSeconds: bigint}), proposal: ([maxRentDurationInSeconds: bigint, minRentDurationInSeconds: bigint] & {maxRentDurationInSeconds: bigint, minRentDurationInSeconds: bigint}), merkleRootUpdate: ([root: string, nonce: bigint] & {root: string, nonce: bigint}), expiration: bigint, intendedFulfiller: string] & {fulfillment: ([fulfiller: number, recipient: string, rentDurationInSeconds: bigint] & {fulfiller: number, recipient: string, rentDurationInSeconds: bigint}), proposal: ([maxRentDurationInSeconds: bigint, minRentDurationInSeconds: bigint] & {maxRentDurationInSeconds: bigint, minRentDurationInSeconds: bigint}), merkleRootUpdate: ([root: string, nonce: bigint] & {root: string, nonce: bigint}), expiration: bigint, intendedFulfiller: string})], {payload: ([fulfillment: ([fulfiller: number, recipient: string, rentDurationInSeconds: bigint] & {fulfiller: number, recipient: string, rentDurationInSeconds: bigint}), proposal: ([maxRentDurationInSeconds: bigint, minRentDurationInSeconds: bigint] & {maxRentDurationInSeconds: bigint, minRentDurationInSeconds: bigint}), merkleRootUpdate: ([root: string, nonce: bigint] & {root: string, nonce: bigint}), expiration: bigint, intendedFulfiller: string] & {fulfillment: ([fulfiller: number, recipient: string, rentDurationInSeconds: bigint] & {fulfiller: number, recipient: string, rentDurationInSeconds: bigint}), proposal: ([maxRentDurationInSeconds: bigint, minRentDurationInSeconds: bigint] & {maxRentDurationInSeconds: bigint, minRentDurationInSeconds: bigint}), merkleRootUpdate: ([root: string, nonce: bigint] & {root: string, nonce: bigint}), expiration: bigint, intendedFulfiller: string})}, string>(
        abi, '0x2e7cb05f'
    ),
    getStopRentPayloadHash: new Func<[payload: ([merkleProof: Array<string>, rental: ([lender: string, renter: string, rentedItem: string, rentedItemId: bigint, endTimestamp: bigint] & {lender: string, renter: string, rentedItem: string, rentedItemId: bigint, endTimestamp: bigint}), merkleRootUpdate: ([root: string, nonce: bigint] & {root: string, nonce: bigint}), expiration: bigint, intendedFulfiller: string] & {merkleProof: Array<string>, rental: ([lender: string, renter: string, rentedItem: string, rentedItemId: bigint, endTimestamp: bigint] & {lender: string, renter: string, rentedItem: string, rentedItemId: bigint, endTimestamp: bigint}), merkleRootUpdate: ([root: string, nonce: bigint] & {root: string, nonce: bigint}), expiration: bigint, intendedFulfiller: string})], {payload: ([merkleProof: Array<string>, rental: ([lender: string, renter: string, rentedItem: string, rentedItemId: bigint, endTimestamp: bigint] & {lender: string, renter: string, rentedItem: string, rentedItemId: bigint, endTimestamp: bigint}), merkleRootUpdate: ([root: string, nonce: bigint] & {root: string, nonce: bigint}), expiration: bigint, intendedFulfiller: string] & {merkleProof: Array<string>, rental: ([lender: string, renter: string, rentedItem: string, rentedItemId: bigint, endTimestamp: bigint] & {lender: string, renter: string, rentedItem: string, rentedItemId: bigint, endTimestamp: bigint}), merkleRootUpdate: ([root: string, nonce: bigint] & {root: string, nonce: bigint}), expiration: bigint, intendedFulfiller: string})}, string>(
        abi, '0x1cca1f40'
    ),
    isRentedOut: new Func<[collection: string, tokenId: bigint], {collection: string, tokenId: bigint}, boolean>(
        abi, '0xb7ccccc1'
    ),
    isWhitelistedModule: new Func<[module: string], {module: string}, boolean>(
        abi, '0x96bf4064'
    ),
    relayBatch: new Func<[recipients: Array<string>, items: Array<string>, itemIds: Array<bigint>], {recipients: Array<string>, items: Array<string>, itemIds: Array<bigint>}, []>(
        abi, '0x8772737c'
    ),
    relayBatchRentals: new Func<[rentals: Array<([lender: string, renter: string, rentedItem: string, rentedItemId: bigint, endTimestamp: bigint] & {lender: string, renter: string, rentedItem: string, rentedItemId: bigint, endTimestamp: bigint})>], {rentals: Array<([lender: string, renter: string, rentedItem: string, rentedItemId: bigint, endTimestamp: bigint] & {lender: string, renter: string, rentedItem: string, rentedItemId: bigint, endTimestamp: bigint})>}, []>(
        abi, '0xd3f90d8c'
    ),
    rentFromZone: new Func<[payload: ([fulfillment: ([fulfiller: number, recipient: string, rentDurationInSeconds: bigint] & {fulfiller: number, recipient: string, rentDurationInSeconds: bigint}), proposal: ([maxRentDurationInSeconds: bigint, minRentDurationInSeconds: bigint] & {maxRentDurationInSeconds: bigint, minRentDurationInSeconds: bigint}), merkleRootUpdate: ([root: string, nonce: bigint] & {root: string, nonce: bigint}), expiration: bigint, intendedFulfiller: string] & {fulfillment: ([fulfiller: number, recipient: string, rentDurationInSeconds: bigint] & {fulfiller: number, recipient: string, rentDurationInSeconds: bigint}), proposal: ([maxRentDurationInSeconds: bigint, minRentDurationInSeconds: bigint] & {maxRentDurationInSeconds: bigint, minRentDurationInSeconds: bigint}), merkleRootUpdate: ([root: string, nonce: bigint] & {root: string, nonce: bigint}), expiration: bigint, intendedFulfiller: string}), seaportOrderHash: string, seaportZoneHash: string, offer: Array<([itemType: number, token: string, identifier: bigint, amount: bigint] & {itemType: number, token: string, identifier: bigint, amount: bigint})>, consideration: Array<([itemType: number, token: string, identifier: bigint, amount: bigint, recipient: string] & {itemType: number, token: string, identifier: bigint, amount: bigint, recipient: string})>, seaportFulfiller: string, offerer: string, signature: string], {payload: ([fulfillment: ([fulfiller: number, recipient: string, rentDurationInSeconds: bigint] & {fulfiller: number, recipient: string, rentDurationInSeconds: bigint}), proposal: ([maxRentDurationInSeconds: bigint, minRentDurationInSeconds: bigint] & {maxRentDurationInSeconds: bigint, minRentDurationInSeconds: bigint}), merkleRootUpdate: ([root: string, nonce: bigint] & {root: string, nonce: bigint}), expiration: bigint, intendedFulfiller: string] & {fulfillment: ([fulfiller: number, recipient: string, rentDurationInSeconds: bigint] & {fulfiller: number, recipient: string, rentDurationInSeconds: bigint}), proposal: ([maxRentDurationInSeconds: bigint, minRentDurationInSeconds: bigint] & {maxRentDurationInSeconds: bigint, minRentDurationInSeconds: bigint}), merkleRootUpdate: ([root: string, nonce: bigint] & {root: string, nonce: bigint}), expiration: bigint, intendedFulfiller: string}), seaportOrderHash: string, seaportZoneHash: string, offer: Array<([itemType: number, token: string, identifier: bigint, amount: bigint] & {itemType: number, token: string, identifier: bigint, amount: bigint})>, consideration: Array<([itemType: number, token: string, identifier: bigint, amount: bigint, recipient: string] & {itemType: number, token: string, identifier: bigint, amount: bigint, recipient: string})>, seaportFulfiller: string, offerer: string, signature: string}, []>(
        abi, '0x5e0685cd'
    ),
    rentalFactory: new Func<[], {}, string>(
        abi, '0x29540534'
    ),
    renterWalletToMerkleRoot: new Func<[renterWallet: string], {renterWallet: string}, string>(
        abi, '0xb1cd153b'
    ),
    renterWalletToMerkleRootNonce: new Func<[renterWallet: string], {renterWallet: string}, bigint>(
        abi, '0xa61eec86'
    ),
    setRentalFactory: new Func<[factory: string], {factory: string}, []>(
        abi, '0xbca893a6'
    ),
    setSigner: new Func<[newSigner: string], {newSigner: string}, []>(
        abi, '0x6c19e783'
    ),
    setZone: new Func<[newZone: string], {newZone: string}, []>(
        abi, '0x531f4dd2'
    ),
    signer: new Func<[], {}, string>(
        abi, '0x238ac933'
    ),
    stopRent: new Func<[payload: ([merkleProof: Array<string>, rental: ([lender: string, renter: string, rentedItem: string, rentedItemId: bigint, endTimestamp: bigint] & {lender: string, renter: string, rentedItem: string, rentedItemId: bigint, endTimestamp: bigint}), merkleRootUpdate: ([root: string, nonce: bigint] & {root: string, nonce: bigint}), expiration: bigint, intendedFulfiller: string] & {merkleProof: Array<string>, rental: ([lender: string, renter: string, rentedItem: string, rentedItemId: bigint, endTimestamp: bigint] & {lender: string, renter: string, rentedItem: string, rentedItemId: bigint, endTimestamp: bigint}), merkleRootUpdate: ([root: string, nonce: bigint] & {root: string, nonce: bigint}), expiration: bigint, intendedFulfiller: string}), signature: string], {payload: ([merkleProof: Array<string>, rental: ([lender: string, renter: string, rentedItem: string, rentedItemId: bigint, endTimestamp: bigint] & {lender: string, renter: string, rentedItem: string, rentedItemId: bigint, endTimestamp: bigint}), merkleRootUpdate: ([root: string, nonce: bigint] & {root: string, nonce: bigint}), expiration: bigint, intendedFulfiller: string] & {merkleProof: Array<string>, rental: ([lender: string, renter: string, rentedItem: string, rentedItemId: bigint, endTimestamp: bigint] & {lender: string, renter: string, rentedItem: string, rentedItemId: bigint, endTimestamp: bigint}), merkleRootUpdate: ([root: string, nonce: bigint] & {root: string, nonce: bigint}), expiration: bigint, intendedFulfiller: string}), signature: string}, []>(
        abi, '0x5aecdfae'
    ),
    stopRentBatch: new Func<[payload: ([merkleProof: Array<string>, proofFlags: Array<boolean>, rentals: Array<([lender: string, renter: string, rentedItem: string, rentedItemId: bigint, endTimestamp: bigint] & {lender: string, renter: string, rentedItem: string, rentedItemId: bigint, endTimestamp: bigint})>, merkleRootUpdate: ([root: string, nonce: bigint] & {root: string, nonce: bigint}), expiration: bigint, intendedFulfiller: string] & {merkleProof: Array<string>, proofFlags: Array<boolean>, rentals: Array<([lender: string, renter: string, rentedItem: string, rentedItemId: bigint, endTimestamp: bigint] & {lender: string, renter: string, rentedItem: string, rentedItemId: bigint, endTimestamp: bigint})>, merkleRootUpdate: ([root: string, nonce: bigint] & {root: string, nonce: bigint}), expiration: bigint, intendedFulfiller: string}), signature: string], {payload: ([merkleProof: Array<string>, proofFlags: Array<boolean>, rentals: Array<([lender: string, renter: string, rentedItem: string, rentedItemId: bigint, endTimestamp: bigint] & {lender: string, renter: string, rentedItem: string, rentedItemId: bigint, endTimestamp: bigint})>, merkleRootUpdate: ([root: string, nonce: bigint] & {root: string, nonce: bigint}), expiration: bigint, intendedFulfiller: string] & {merkleProof: Array<string>, proofFlags: Array<boolean>, rentals: Array<([lender: string, renter: string, rentedItem: string, rentedItemId: bigint, endTimestamp: bigint] & {lender: string, renter: string, rentedItem: string, rentedItemId: bigint, endTimestamp: bigint})>, merkleRootUpdate: ([root: string, nonce: bigint] & {root: string, nonce: bigint}), expiration: bigint, intendedFulfiller: string}), signature: string}, []>(
        abi, '0x4de1fc0b'
    ),
    transferAdmin: new Func<[newAdmin: string], {newAdmin: string}, []>(
        abi, '0x75829def'
    ),
    whitelistModule: new Func<[module: string], {module: string}, []>(
        abi, '0xbccebb21'
    ),
    zone: new Func<[], {}, string>(
        abi, '0xf310b985'
    ),
}

export class Contract extends ContractBase {

    admin(): Promise<string> {
        return this.eth_call(functions.admin, [])
    }

    assetIdToSeaportOrderHash(assetId: string): Promise<string> {
        return this.eth_call(functions.assetIdToSeaportOrderHash, [assetId])
    }

    domainSeparator(): Promise<string> {
        return this.eth_call(functions.domainSeparator, [])
    }

    getRentPayloadHash(payload: ([fulfillment: ([fulfiller: number, recipient: string, rentDurationInSeconds: bigint] & {fulfiller: number, recipient: string, rentDurationInSeconds: bigint}), proposal: ([maxRentDurationInSeconds: bigint, minRentDurationInSeconds: bigint] & {maxRentDurationInSeconds: bigint, minRentDurationInSeconds: bigint}), merkleRootUpdate: ([root: string, nonce: bigint] & {root: string, nonce: bigint}), expiration: bigint, intendedFulfiller: string] & {fulfillment: ([fulfiller: number, recipient: string, rentDurationInSeconds: bigint] & {fulfiller: number, recipient: string, rentDurationInSeconds: bigint}), proposal: ([maxRentDurationInSeconds: bigint, minRentDurationInSeconds: bigint] & {maxRentDurationInSeconds: bigint, minRentDurationInSeconds: bigint}), merkleRootUpdate: ([root: string, nonce: bigint] & {root: string, nonce: bigint}), expiration: bigint, intendedFulfiller: string})): Promise<string> {
        return this.eth_call(functions.getRentPayloadHash, [payload])
    }

    getStopRentPayloadHash(payload: ([merkleProof: Array<string>, rental: ([lender: string, renter: string, rentedItem: string, rentedItemId: bigint, endTimestamp: bigint] & {lender: string, renter: string, rentedItem: string, rentedItemId: bigint, endTimestamp: bigint}), merkleRootUpdate: ([root: string, nonce: bigint] & {root: string, nonce: bigint}), expiration: bigint, intendedFulfiller: string] & {merkleProof: Array<string>, rental: ([lender: string, renter: string, rentedItem: string, rentedItemId: bigint, endTimestamp: bigint] & {lender: string, renter: string, rentedItem: string, rentedItemId: bigint, endTimestamp: bigint}), merkleRootUpdate: ([root: string, nonce: bigint] & {root: string, nonce: bigint}), expiration: bigint, intendedFulfiller: string})): Promise<string> {
        return this.eth_call(functions.getStopRentPayloadHash, [payload])
    }

    isRentedOut(collection: string, tokenId: bigint): Promise<boolean> {
        return this.eth_call(functions.isRentedOut, [collection, tokenId])
    }

    isWhitelistedModule(module: string): Promise<boolean> {
        return this.eth_call(functions.isWhitelistedModule, [module])
    }

    rentalFactory(): Promise<string> {
        return this.eth_call(functions.rentalFactory, [])
    }

    renterWalletToMerkleRoot(renterWallet: string): Promise<string> {
        return this.eth_call(functions.renterWalletToMerkleRoot, [renterWallet])
    }

    renterWalletToMerkleRootNonce(renterWallet: string): Promise<bigint> {
        return this.eth_call(functions.renterWalletToMerkleRootNonce, [renterWallet])
    }

    signer(): Promise<string> {
        return this.eth_call(functions.signer, [])
    }

    zone(): Promise<string> {
        return this.eth_call(functions.zone, [])
    }
}
