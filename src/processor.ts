import {EvmBatchProcessor, EvmBatchProcessorFields, BlockHeader, Log as _Log, Transaction as _Transaction} from '@subsquid/evm-processor'
import {lookupArchive} from '@subsquid/archive-registry'
import * as contractAbi from './abi/rental-manager'

export const processor = new EvmBatchProcessor()
    .setDataSource({
        archive: lookupArchive('sepolia', {type: 'EVM'}),
    })
    .setFields({
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
        }
    })
    .addLog({
        address: ['0xea0b609f81b3d7699a970e670ec471daf687e5c2'],
        topic0: [
            contractAbi.events['RentalStarted'].topic,
            contractAbi.events['RentalStopped'].topic,
        ],
        range: {
            from: 3923754,
        },
    })
    .addTransaction({
        to: ['0xea0b609f81b3d7699a970e670ec471daf687e5c2'],
        sighash: [
            contractAbi.functions['rentFromZone'].sighash,
            contractAbi.functions['setZone'].sighash,
        ],
        range: {
            from: 3923754,
        },
    })

export type Fields = EvmBatchProcessorFields<typeof processor>
export type Block = BlockHeader<Fields>
export type Log = _Log<Fields>
export type Transaction = _Transaction<Fields>
