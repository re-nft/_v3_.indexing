import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {RentalStarted} from "./rentalStarted.model"

@Entity_()
export class Hook {
    constructor(props?: Partial<Hook>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => RentalStarted, {nullable: true})
    rentalStarted!: RentalStarted

    @Column_("text", {nullable: false})
    target!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    itemIndex!: bigint

    @Column_("text", {nullable: false})
    extraData!: string
}
