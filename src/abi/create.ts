import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './create.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    RentalOrderStarted: new LogEvent<([orderHash: string, emittedExtraData: string, seaportOrderHash: string, items: Array<([itemType: number, settleTo: number, token: string, amount: bigint, identifier: bigint] & {itemType: number, settleTo: number, token: string, amount: bigint, identifier: bigint})>, hooks: Array<([target: string, itemIndex: bigint, extraData: string] & {target: string, itemIndex: bigint, extraData: string})>, orderType: number, lender: string, renter: string, rentalWallet: string, startTimestamp: bigint, endTimestamp: bigint] & {orderHash: string, emittedExtraData: string, seaportOrderHash: string, items: Array<([itemType: number, settleTo: number, token: string, amount: bigint, identifier: bigint] & {itemType: number, settleTo: number, token: string, amount: bigint, identifier: bigint})>, hooks: Array<([target: string, itemIndex: bigint, extraData: string] & {target: string, itemIndex: bigint, extraData: string})>, orderType: number, lender: string, renter: string, rentalWallet: string, startTimestamp: bigint, endTimestamp: bigint})>(
        abi, '0xb6222b2355a05d87c72578605c810af2691601e9e8f3b1e6487d72f1343a1e17'
    ),
    SeaportCompatibleContractDeployed: new LogEvent<[]>(
        abi, '0x98a7ac23945182ac62b68fbe5ba35cc0bf5c4c34b3a410ce94a4c2270282d6b5'
    ),
}

export const functions = {
    ESCRW: new Func<[], {}, string>(
        abi, '0x8dba9561'
    ),
    STORE: new Func<[], {}, string>(
        abi, '0x507f1465'
    ),
    changeKernel: new Func<[newKernel_: string], {newKernel_: string}, []>(
        abi, '0x4657b36c'
    ),
    configureDependencies: new Func<[], {}, Array<string>>(
        abi, '0x9459b875'
    ),
    domainSeparator: new Func<[], {}, string>(
        abi, '0xf698da25'
    ),
    getOrderMetadataHash: new Func<[metadata: ([orderType: number, rentDuration: bigint, hooks: Array<([target: string, itemIndex: bigint, extraData: string] & {target: string, itemIndex: bigint, extraData: string})>, emittedExtraData: string] & {orderType: number, rentDuration: bigint, hooks: Array<([target: string, itemIndex: bigint, extraData: string] & {target: string, itemIndex: bigint, extraData: string})>, emittedExtraData: string})], {metadata: ([orderType: number, rentDuration: bigint, hooks: Array<([target: string, itemIndex: bigint, extraData: string] & {target: string, itemIndex: bigint, extraData: string})>, emittedExtraData: string] & {orderType: number, rentDuration: bigint, hooks: Array<([target: string, itemIndex: bigint, extraData: string] & {target: string, itemIndex: bigint, extraData: string})>, emittedExtraData: string})}, string>(
        abi, '0xd3f969d1'
    ),
    getRentPayloadHash: new Func<[payload: ([fulfillment: ([recipient: string] & {recipient: string}), metadata: ([orderType: number, rentDuration: bigint, hooks: Array<([target: string, itemIndex: bigint, extraData: string] & {target: string, itemIndex: bigint, extraData: string})>, emittedExtraData: string] & {orderType: number, rentDuration: bigint, hooks: Array<([target: string, itemIndex: bigint, extraData: string] & {target: string, itemIndex: bigint, extraData: string})>, emittedExtraData: string}), expiration: bigint, intendedFulfiller: string] & {fulfillment: ([recipient: string] & {recipient: string}), metadata: ([orderType: number, rentDuration: bigint, hooks: Array<([target: string, itemIndex: bigint, extraData: string] & {target: string, itemIndex: bigint, extraData: string})>, emittedExtraData: string] & {orderType: number, rentDuration: bigint, hooks: Array<([target: string, itemIndex: bigint, extraData: string] & {target: string, itemIndex: bigint, extraData: string})>, emittedExtraData: string}), expiration: bigint, intendedFulfiller: string})], {payload: ([fulfillment: ([recipient: string] & {recipient: string}), metadata: ([orderType: number, rentDuration: bigint, hooks: Array<([target: string, itemIndex: bigint, extraData: string] & {target: string, itemIndex: bigint, extraData: string})>, emittedExtraData: string] & {orderType: number, rentDuration: bigint, hooks: Array<([target: string, itemIndex: bigint, extraData: string] & {target: string, itemIndex: bigint, extraData: string})>, emittedExtraData: string}), expiration: bigint, intendedFulfiller: string] & {fulfillment: ([recipient: string] & {recipient: string}), metadata: ([orderType: number, rentDuration: bigint, hooks: Array<([target: string, itemIndex: bigint, extraData: string] & {target: string, itemIndex: bigint, extraData: string})>, emittedExtraData: string] & {orderType: number, rentDuration: bigint, hooks: Array<([target: string, itemIndex: bigint, extraData: string] & {target: string, itemIndex: bigint, extraData: string})>, emittedExtraData: string}), expiration: bigint, intendedFulfiller: string})}, string>(
        abi, '0x0833ee2e'
    ),
    getRentalOrderHash: new Func<[order: ([seaportOrderHash: string, items: Array<([itemType: number, settleTo: number, token: string, amount: bigint, identifier: bigint] & {itemType: number, settleTo: number, token: string, amount: bigint, identifier: bigint})>, hooks: Array<([target: string, itemIndex: bigint, extraData: string] & {target: string, itemIndex: bigint, extraData: string})>, orderType: number, lender: string, renter: string, rentalWallet: string, startTimestamp: bigint, endTimestamp: bigint] & {seaportOrderHash: string, items: Array<([itemType: number, settleTo: number, token: string, amount: bigint, identifier: bigint] & {itemType: number, settleTo: number, token: string, amount: bigint, identifier: bigint})>, hooks: Array<([target: string, itemIndex: bigint, extraData: string] & {target: string, itemIndex: bigint, extraData: string})>, orderType: number, lender: string, renter: string, rentalWallet: string, startTimestamp: bigint, endTimestamp: bigint})], {order: ([seaportOrderHash: string, items: Array<([itemType: number, settleTo: number, token: string, amount: bigint, identifier: bigint] & {itemType: number, settleTo: number, token: string, amount: bigint, identifier: bigint})>, hooks: Array<([target: string, itemIndex: bigint, extraData: string] & {target: string, itemIndex: bigint, extraData: string})>, orderType: number, lender: string, renter: string, rentalWallet: string, startTimestamp: bigint, endTimestamp: bigint] & {seaportOrderHash: string, items: Array<([itemType: number, settleTo: number, token: string, amount: bigint, identifier: bigint] & {itemType: number, settleTo: number, token: string, amount: bigint, identifier: bigint})>, hooks: Array<([target: string, itemIndex: bigint, extraData: string] & {target: string, itemIndex: bigint, extraData: string})>, orderType: number, lender: string, renter: string, rentalWallet: string, startTimestamp: bigint, endTimestamp: bigint})}, string>(
        abi, '0xef985276'
    ),
    getSeaportMetadata: new Func<[], {}, ([name: string, schemas: Array<([id: bigint, metadata: string] & {id: bigint, metadata: string})>] & {name: string, schemas: Array<([id: bigint, metadata: string] & {id: bigint, metadata: string})>})>(
        abi, '0x2e778efc'
    ),
    isActive: new Func<[], {}, boolean>(
        abi, '0x22f3e2d4'
    ),
    kernel: new Func<[], {}, string>(
        abi, '0xd4aae0c4'
    ),
    requestPermissions: new Func<[], {}, Array<([keycode: string, funcSelector: string] & {keycode: string, funcSelector: string})>>(
        abi, '0x5924be70'
    ),
    setActiveStatus: new Func<[activate_: boolean], {activate_: boolean}, []>(
        abi, '0xec7404b1'
    ),
    supportsInterface: new Func<[interfaceId: string], {interfaceId: string}, boolean>(
        abi, '0x01ffc9a7'
    ),
    validateOrder: new Func<[zoneParams: ([orderHash: string, fulfiller: string, offerer: string, offer: Array<([itemType: number, token: string, identifier: bigint, amount: bigint] & {itemType: number, token: string, identifier: bigint, amount: bigint})>, consideration: Array<([itemType: number, token: string, identifier: bigint, amount: bigint, recipient: string] & {itemType: number, token: string, identifier: bigint, amount: bigint, recipient: string})>, extraData: string, orderHashes: Array<string>, startTime: bigint, endTime: bigint, zoneHash: string] & {orderHash: string, fulfiller: string, offerer: string, offer: Array<([itemType: number, token: string, identifier: bigint, amount: bigint] & {itemType: number, token: string, identifier: bigint, amount: bigint})>, consideration: Array<([itemType: number, token: string, identifier: bigint, amount: bigint, recipient: string] & {itemType: number, token: string, identifier: bigint, amount: bigint, recipient: string})>, extraData: string, orderHashes: Array<string>, startTime: bigint, endTime: bigint, zoneHash: string})], {zoneParams: ([orderHash: string, fulfiller: string, offerer: string, offer: Array<([itemType: number, token: string, identifier: bigint, amount: bigint] & {itemType: number, token: string, identifier: bigint, amount: bigint})>, consideration: Array<([itemType: number, token: string, identifier: bigint, amount: bigint, recipient: string] & {itemType: number, token: string, identifier: bigint, amount: bigint, recipient: string})>, extraData: string, orderHashes: Array<string>, startTime: bigint, endTime: bigint, zoneHash: string] & {orderHash: string, fulfiller: string, offerer: string, offer: Array<([itemType: number, token: string, identifier: bigint, amount: bigint] & {itemType: number, token: string, identifier: bigint, amount: bigint})>, consideration: Array<([itemType: number, token: string, identifier: bigint, amount: bigint, recipient: string] & {itemType: number, token: string, identifier: bigint, amount: bigint, recipient: string})>, extraData: string, orderHashes: Array<string>, startTime: bigint, endTime: bigint, zoneHash: string})}, string>(
        abi, '0x17b1f942'
    ),
}

export class Contract extends ContractBase {

    ESCRW(): Promise<string> {
        return this.eth_call(functions.ESCRW, [])
    }

    STORE(): Promise<string> {
        return this.eth_call(functions.STORE, [])
    }

    domainSeparator(): Promise<string> {
        return this.eth_call(functions.domainSeparator, [])
    }

    getOrderMetadataHash(metadata: ([orderType: number, rentDuration: bigint, hooks: Array<([target: string, itemIndex: bigint, extraData: string] & {target: string, itemIndex: bigint, extraData: string})>, emittedExtraData: string] & {orderType: number, rentDuration: bigint, hooks: Array<([target: string, itemIndex: bigint, extraData: string] & {target: string, itemIndex: bigint, extraData: string})>, emittedExtraData: string})): Promise<string> {
        return this.eth_call(functions.getOrderMetadataHash, [metadata])
    }

    getRentPayloadHash(payload: ([fulfillment: ([recipient: string] & {recipient: string}), metadata: ([orderType: number, rentDuration: bigint, hooks: Array<([target: string, itemIndex: bigint, extraData: string] & {target: string, itemIndex: bigint, extraData: string})>, emittedExtraData: string] & {orderType: number, rentDuration: bigint, hooks: Array<([target: string, itemIndex: bigint, extraData: string] & {target: string, itemIndex: bigint, extraData: string})>, emittedExtraData: string}), expiration: bigint, intendedFulfiller: string] & {fulfillment: ([recipient: string] & {recipient: string}), metadata: ([orderType: number, rentDuration: bigint, hooks: Array<([target: string, itemIndex: bigint, extraData: string] & {target: string, itemIndex: bigint, extraData: string})>, emittedExtraData: string] & {orderType: number, rentDuration: bigint, hooks: Array<([target: string, itemIndex: bigint, extraData: string] & {target: string, itemIndex: bigint, extraData: string})>, emittedExtraData: string}), expiration: bigint, intendedFulfiller: string})): Promise<string> {
        return this.eth_call(functions.getRentPayloadHash, [payload])
    }

    getRentalOrderHash(order: ([seaportOrderHash: string, items: Array<([itemType: number, settleTo: number, token: string, amount: bigint, identifier: bigint] & {itemType: number, settleTo: number, token: string, amount: bigint, identifier: bigint})>, hooks: Array<([target: string, itemIndex: bigint, extraData: string] & {target: string, itemIndex: bigint, extraData: string})>, orderType: number, lender: string, renter: string, rentalWallet: string, startTimestamp: bigint, endTimestamp: bigint] & {seaportOrderHash: string, items: Array<([itemType: number, settleTo: number, token: string, amount: bigint, identifier: bigint] & {itemType: number, settleTo: number, token: string, amount: bigint, identifier: bigint})>, hooks: Array<([target: string, itemIndex: bigint, extraData: string] & {target: string, itemIndex: bigint, extraData: string})>, orderType: number, lender: string, renter: string, rentalWallet: string, startTimestamp: bigint, endTimestamp: bigint})): Promise<string> {
        return this.eth_call(functions.getRentalOrderHash, [order])
    }

    getSeaportMetadata(): Promise<([name: string, schemas: Array<([id: bigint, metadata: string] & {id: bigint, metadata: string})>] & {name: string, schemas: Array<([id: bigint, metadata: string] & {id: bigint, metadata: string})>})> {
        return this.eth_call(functions.getSeaportMetadata, [])
    }

    isActive(): Promise<boolean> {
        return this.eth_call(functions.isActive, [])
    }

    kernel(): Promise<string> {
        return this.eth_call(functions.kernel, [])
    }

    requestPermissions(): Promise<Array<([keycode: string, funcSelector: string] & {keycode: string, funcSelector: string})>> {
        return this.eth_call(functions.requestPermissions, [])
    }

    supportsInterface(interfaceId: string): Promise<boolean> {
        return this.eth_call(functions.supportsInterface, [interfaceId])
    }
}
