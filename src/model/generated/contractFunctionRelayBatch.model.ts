import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class ContractFunctionRelayBatch {
    constructor(props?: Partial<ContractFunctionRelayBatch>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("int4", {nullable: false})
    blockNumber!: number

    @Index_()
    @Column_("timestamp with time zone", {nullable: false})
    blockTimestamp!: Date

    @Index_()
    @Column_("text", {nullable: false})
    transactionHash!: string

    @Index_()
    @Column_("text", {nullable: false})
    contract!: string

    @Index_()
    @Column_("text", {nullable: false})
    functionName!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    functionValue!: bigint | undefined | null

    @Index_()
    @Column_("bool", {nullable: true})
    functionSuccess!: boolean | undefined | null

    @Column_("jsonb", {nullable: false})
    recipients!: unknown

    @Column_("jsonb", {nullable: false})
    items!: unknown

    @Column_("jsonb", {nullable: false})
    itemIds!: unknown
}
