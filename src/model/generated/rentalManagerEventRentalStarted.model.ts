import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class RentalManagerEventRentalStarted {
    constructor(props?: Partial<RentalManagerEventRentalStarted>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("text", {nullable: false})
    network!: string

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
    eventName!: string

    @Index_()
    @Column_("text", {nullable: false})
    seaportOrderHash!: string

    @Index_()
    @Column_("text", {nullable: false})
    renterWallet!: string

    @Index_()
    @Column_("text", {nullable: false})
    lender!: string

    @Column_("text", {nullable: false})
    collection!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    tokenId!: bigint

    @Column_("text", {nullable: false})
    fulfiller!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    rentEndTimestamp!: bigint
}
