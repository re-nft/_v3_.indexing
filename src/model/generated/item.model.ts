import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {RentalStarted} from "./rentalStarted.model"

@Entity_()
export class Item {
    constructor(props?: Partial<Item>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => RentalStarted, {nullable: true})
    rentalStarted!: RentalStarted

    @Column_("int4", {nullable: false})
    itemType!: number

    @Column_("int4", {nullable: false})
    settleTo!: number

    @Column_("text", {nullable: false})
    token!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    amount!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    identifier!: bigint
}
