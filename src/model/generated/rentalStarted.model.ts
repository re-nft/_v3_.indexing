import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {RentalStartedItem} from "./rentalStartedItem.model"
import {RentalStartedHook} from "./rentalStartedHook.model"

@Entity_()
export class RentalStarted {
    constructor(props?: Partial<RentalStarted>) {
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
    orderHash!: string

    @Column_("text", {nullable: false})
    emittedExtraData!: string

    @Index_()
    @Column_("text", {nullable: false})
    seaportOrderHash!: string

    @OneToMany_(() => RentalStartedItem, e => e.rentalStarted)
    items!: RentalStartedItem[]

    @OneToMany_(() => RentalStartedHook, e => e.rentalStarted)
    hooks!: RentalStartedHook[]

    @Column_("int4", {nullable: false})
    orderType!: number

    @Index_()
    @Column_("text", {nullable: false})
    lender!: string

    @Index_()
    @Column_("text", {nullable: false})
    renter!: string

    @Index_()
    @Column_("text", {nullable: false})
    rentalWallet!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    startTimestamp!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    endTimestamp!: bigint
}
