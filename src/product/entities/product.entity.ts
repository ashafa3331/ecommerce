import { CartEntity } from "src/cart/Entity/cart.entity"
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Product {
    @PrimaryGeneratedColumn("uuid")
   id: number

   @Column()
   name: string

   @Column()
   price: number

   @Column()
   quantity: string

   @Column()
   createdAt: String

   @Column()
   updtedAt: String

   @OneToMany(type => CartEntity, cart => cart.id)
   @JoinColumn()
   cart: CartEntity[]
}
