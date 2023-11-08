import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './factory.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    RentalSafeDeployment: new LogEvent<([safe: string, owners: Array<string>, threshold: bigint] & {safe: string, owners: Array<string>, threshold: bigint})>(
        abi, '0x40d226e4c5207357da7aa9a4b5ee743811bd62ae3f63323d56e391292e9b099b'
    ),
}

export const functions = {
    STORE: new Func<[], {}, string>(
        abi, '0x507f1465'
    ),
    changeKernel: new Func<[newKernel_: string], {newKernel_: string}, []>(
        abi, '0x4657b36c'
    ),
    configureDependencies: new Func<[], {}, Array<string>>(
        abi, '0x9459b875'
    ),
    deployRentalSafe: new Func<[owners: Array<string>, threshold: bigint], {owners: Array<string>, threshold: bigint}, string>(
        abi, '0xa94f3b07'
    ),
    fallbackHandler: new Func<[], {}, string>(
        abi, '0xeed2f252'
    ),
    guardPolicy: new Func<[], {}, string>(
        abi, '0xb1f8fedb'
    ),
    initializeRentalSafe: new Func<[_stopPolicy: string, _guardPolicy: string], {_stopPolicy: string, _guardPolicy: string}, []>(
        abi, '0xd6bb2939'
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
    safeProxyFactory: new Func<[], {}, string>(
        abi, '0x19964501'
    ),
    safeSingleton: new Func<[], {}, string>(
        abi, '0xac7d146b'
    ),
    setActiveStatus: new Func<[activate_: boolean], {activate_: boolean}, []>(
        abi, '0xec7404b1'
    ),
    stopPolicy: new Func<[], {}, string>(
        abi, '0xc783f6de'
    ),
}

export class Contract extends ContractBase {

    STORE(): Promise<string> {
        return this.eth_call(functions.STORE, [])
    }

    fallbackHandler(): Promise<string> {
        return this.eth_call(functions.fallbackHandler, [])
    }

    guardPolicy(): Promise<string> {
        return this.eth_call(functions.guardPolicy, [])
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

    safeProxyFactory(): Promise<string> {
        return this.eth_call(functions.safeProxyFactory, [])
    }

    safeSingleton(): Promise<string> {
        return this.eth_call(functions.safeSingleton, [])
    }

    stopPolicy(): Promise<string> {
        return this.eth_call(functions.stopPolicy, [])
    }
}
