import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './rental-factory.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    RentalSafeDeployment: new LogEvent<([safe: string, rentalManager: string, guard: string, owner: string, nonce: bigint] & {safe: string, rentalManager: string, guard: string, owner: string, nonce: bigint})>(
        abi, '0xffb141858870a7061c4a61ee7b915a5e9e2e498c589e8be077fe0143ddae8b40'
    ),
}

export const functions = {
    deployedSafes: new Func<[safe: string], {safe: string}, bigint>(
        abi, '0xf6fdddf1'
    ),
}

export class Contract extends ContractBase {

    deployedSafes(safe: string): Promise<bigint> {
        return this.eth_call(functions.deployedSafes, [safe])
    }
}
