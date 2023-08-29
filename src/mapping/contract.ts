import {DataHandlerContext} from '@subsquid/evm-processor'
import {toJSON} from '@subsquid/util-internal-json'
import {Store} from '../db'
import {EntityBuffer} from '../entityBuffer'
import {ContractEventModuleDewhitelisted, ContractEventModuleWhitelisted, ContractEventRentalStarted, ContractEventRentalStopped, ContractFunctionDewhitelistModule, ContractFunctionRelayBatch, ContractFunctionRelayBatchRentals, ContractFunctionRentFromZone, ContractFunctionSetRentalFactory, ContractFunctionSetSigner, ContractFunctionSetZone, ContractFunctionStopRent, ContractFunctionStopRentBatch, ContractFunctionTransferAdmin, ContractFunctionWhitelistModule} from '../model'
import * as spec from '../abi/rental-manager'
import {Log, Transaction} from '../processor'

const address = '0xea0b609f81b3d7699a970e670ec471daf687e5c2'


export function parseEvent(ctx: DataHandlerContext<Store>, log: Log) {
    try {
        switch (log.topics[0]) {
            case spec.events['ModuleDewhitelisted'].topic: {
                let e = spec.events['ModuleDewhitelisted'].decode(log)
                EntityBuffer.add(
                    new ContractEventModuleDewhitelisted({
                        id: log.id,
                        blockNumber: log.block.height,
                        blockTimestamp: new Date(log.block.timestamp),
                        transactionHash: log.transactionHash,
                        contract: log.address,
                        eventName: 'ModuleDewhitelisted',
                        module: e[0],
                        dewhitelister: e[1],
                    })
                )
                break
            }
            case spec.events['ModuleWhitelisted'].topic: {
                let e = spec.events['ModuleWhitelisted'].decode(log)
                EntityBuffer.add(
                    new ContractEventModuleWhitelisted({
                        id: log.id,
                        blockNumber: log.block.height,
                        blockTimestamp: new Date(log.block.timestamp),
                        transactionHash: log.transactionHash,
                        contract: log.address,
                        eventName: 'ModuleWhitelisted',
                        module: e[0],
                        whitelister: e[1],
                    })
                )
                break
            }
            case spec.events['RentalStarted'].topic: {
                let e = spec.events['RentalStarted'].decode(log)
                EntityBuffer.add(
                    new ContractEventRentalStarted({
                        id: log.id,
                        blockNumber: log.block.height,
                        blockTimestamp: new Date(log.block.timestamp),
                        transactionHash: log.transactionHash,
                        contract: log.address,
                        eventName: 'RentalStarted',
                        seaportOrderHash: e[0],
                        renterWallet: e[1],
                        lender: e[2],
                        collection: e[3],
                        tokenId: e[4],
                        fulfiller: e[5],
                        rentEndTimestamp: e[6],
                    })
                )
                break
            }
            case spec.events['RentalStopped'].topic: {
                let e = spec.events['RentalStopped'].decode(log)
                EntityBuffer.add(
                    new ContractEventRentalStopped({
                        id: log.id,
                        blockNumber: log.block.height,
                        blockTimestamp: new Date(log.block.timestamp),
                        transactionHash: log.transactionHash,
                        contract: log.address,
                        eventName: 'RentalStopped',
                        seaportOrderHash: e[0],
                        renterWallet: e[1],
                        lender: e[2],
                        collection: e[3],
                        tokenId: e[4],
                        stopper: e[5],
                    })
                )
                break
            }
        }
    }
    catch (error) {
        ctx.log.error({error, blockNumber: log.block.height, blockHash: log.block.hash, address}, `Unable to decode event "${log.topics[0]}"`)
    }
}

export function parseFunction(ctx: DataHandlerContext<Store>, transaction: Transaction) {
    try {
        switch (transaction.input.slice(0, 10)) {
            case spec.functions['dewhitelistModule'].sighash: {
                let f = spec.functions['dewhitelistModule'].decode(transaction.input)
                EntityBuffer.add(
                    new ContractFunctionDewhitelistModule({
                        id: transaction.id,
                        blockNumber: transaction.block.height,
                        blockTimestamp: new Date(transaction.block.timestamp),
                        transactionHash: transaction.hash,
                        contract: transaction.to!,
                        functionName: 'dewhitelistModule',
                        functionValue: transaction.value,
                        functionSuccess: transaction.status != null ? Boolean(transaction.status) : undefined,
                        module: f[0],
                    })
                )
                break
            }
            case spec.functions['relayBatch'].sighash: {
                let f = spec.functions['relayBatch'].decode(transaction.input)
                EntityBuffer.add(
                    new ContractFunctionRelayBatch({
                        id: transaction.id,
                        blockNumber: transaction.block.height,
                        blockTimestamp: new Date(transaction.block.timestamp),
                        transactionHash: transaction.hash,
                        contract: transaction.to!,
                        functionName: 'relayBatch',
                        functionValue: transaction.value,
                        functionSuccess: transaction.status != null ? Boolean(transaction.status) : undefined,
                        recipients: toJSON(f[0]),
                        items: toJSON(f[1]),
                        itemIds: toJSON(f[2]),
                    })
                )
                break
            }
            case spec.functions['relayBatchRentals'].sighash: {
                let f = spec.functions['relayBatchRentals'].decode(transaction.input)
                EntityBuffer.add(
                    new ContractFunctionRelayBatchRentals({
                        id: transaction.id,
                        blockNumber: transaction.block.height,
                        blockTimestamp: new Date(transaction.block.timestamp),
                        transactionHash: transaction.hash,
                        contract: transaction.to!,
                        functionName: 'relayBatchRentals',
                        functionValue: transaction.value,
                        functionSuccess: transaction.status != null ? Boolean(transaction.status) : undefined,
                        rentals: toJSON(f[0]),
                    })
                )
                break
            }
            case spec.functions['rentFromZone'].sighash: {
                let f = spec.functions['rentFromZone'].decode(transaction.input)
                EntityBuffer.add(
                    new ContractFunctionRentFromZone({
                        id: transaction.id,
                        blockNumber: transaction.block.height,
                        blockTimestamp: new Date(transaction.block.timestamp),
                        transactionHash: transaction.hash,
                        contract: transaction.to!,
                        functionName: 'rentFromZone',
                        functionValue: transaction.value,
                        functionSuccess: transaction.status != null ? Boolean(transaction.status) : undefined,
                        payload: toJSON(f[0]),
                        seaportOrderHash: f[1],
                        seaportZoneHash: f[2],
                        offer: toJSON(f[3]),
                        consideration: toJSON(f[4]),
                        seaportFulfiller: f[5],
                        offerer: f[6],
                        signature: f[7],
                    })
                )
                break
            }
            case spec.functions['setRentalFactory'].sighash: {
                let f = spec.functions['setRentalFactory'].decode(transaction.input)
                EntityBuffer.add(
                    new ContractFunctionSetRentalFactory({
                        id: transaction.id,
                        blockNumber: transaction.block.height,
                        blockTimestamp: new Date(transaction.block.timestamp),
                        transactionHash: transaction.hash,
                        contract: transaction.to!,
                        functionName: 'setRentalFactory',
                        functionValue: transaction.value,
                        functionSuccess: transaction.status != null ? Boolean(transaction.status) : undefined,
                        factory: f[0],
                    })
                )
                break
            }
            case spec.functions['setSigner'].sighash: {
                let f = spec.functions['setSigner'].decode(transaction.input)
                EntityBuffer.add(
                    new ContractFunctionSetSigner({
                        id: transaction.id,
                        blockNumber: transaction.block.height,
                        blockTimestamp: new Date(transaction.block.timestamp),
                        transactionHash: transaction.hash,
                        contract: transaction.to!,
                        functionName: 'setSigner',
                        functionValue: transaction.value,
                        functionSuccess: transaction.status != null ? Boolean(transaction.status) : undefined,
                        newSigner: f[0],
                    })
                )
                break
            }
            case spec.functions['setZone'].sighash: {
                let f = spec.functions['setZone'].decode(transaction.input)
                EntityBuffer.add(
                    new ContractFunctionSetZone({
                        id: transaction.id,
                        blockNumber: transaction.block.height,
                        blockTimestamp: new Date(transaction.block.timestamp),
                        transactionHash: transaction.hash,
                        contract: transaction.to!,
                        functionName: 'setZone',
                        functionValue: transaction.value,
                        functionSuccess: transaction.status != null ? Boolean(transaction.status) : undefined,
                        newZone: f[0],
                    })
                )
                break
            }
            case spec.functions['stopRent'].sighash: {
                let f = spec.functions['stopRent'].decode(transaction.input)
                EntityBuffer.add(
                    new ContractFunctionStopRent({
                        id: transaction.id,
                        blockNumber: transaction.block.height,
                        blockTimestamp: new Date(transaction.block.timestamp),
                        transactionHash: transaction.hash,
                        contract: transaction.to!,
                        functionName: 'stopRent',
                        functionValue: transaction.value,
                        functionSuccess: transaction.status != null ? Boolean(transaction.status) : undefined,
                        payload: toJSON(f[0]),
                        signature: f[1],
                    })
                )
                break
            }
            case spec.functions['stopRentBatch'].sighash: {
                let f = spec.functions['stopRentBatch'].decode(transaction.input)
                EntityBuffer.add(
                    new ContractFunctionStopRentBatch({
                        id: transaction.id,
                        blockNumber: transaction.block.height,
                        blockTimestamp: new Date(transaction.block.timestamp),
                        transactionHash: transaction.hash,
                        contract: transaction.to!,
                        functionName: 'stopRentBatch',
                        functionValue: transaction.value,
                        functionSuccess: transaction.status != null ? Boolean(transaction.status) : undefined,
                        payload: toJSON(f[0]),
                        signature: f[1],
                    })
                )
                break
            }
            case spec.functions['transferAdmin'].sighash: {
                let f = spec.functions['transferAdmin'].decode(transaction.input)
                EntityBuffer.add(
                    new ContractFunctionTransferAdmin({
                        id: transaction.id,
                        blockNumber: transaction.block.height,
                        blockTimestamp: new Date(transaction.block.timestamp),
                        transactionHash: transaction.hash,
                        contract: transaction.to!,
                        functionName: 'transferAdmin',
                        functionValue: transaction.value,
                        functionSuccess: transaction.status != null ? Boolean(transaction.status) : undefined,
                        newAdmin: f[0],
                    })
                )
                break
            }
            case spec.functions['whitelistModule'].sighash: {
                let f = spec.functions['whitelistModule'].decode(transaction.input)
                EntityBuffer.add(
                    new ContractFunctionWhitelistModule({
                        id: transaction.id,
                        blockNumber: transaction.block.height,
                        blockTimestamp: new Date(transaction.block.timestamp),
                        transactionHash: transaction.hash,
                        contract: transaction.to!,
                        functionName: 'whitelistModule',
                        functionValue: transaction.value,
                        functionSuccess: transaction.status != null ? Boolean(transaction.status) : undefined,
                        module: f[0],
                    })
                )
                break
            }
        }
    }
    catch (error) {
        ctx.log.error({error, blockNumber: transaction.block.height, blockHash: transaction.block.hash, address}, `Unable to decode function "${transaction.input.slice(0, 10)}"`)
    }
}
