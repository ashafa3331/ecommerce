import { Exclude } from "class-transformer";
import { CartEntity } from "src/cart/Entity/cart.entity";
import { OrderEntity } from "src/order/entities/order.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
   id: string

   @Column({unique:true})
   username: string

   @Column({unique:true})
   email: string

   @Column()
    @Exclude()
   password: string

   @Column()
   role: string

   @CreateDateColumn()
   createdAt : String

   @UpdateDateColumn()
   updtedAt : String
   

   @OneToMany(type => CartEntity, cart => cart.id)
   @JoinColumn()
   cart: CartEntity[]

   @OneToOne(type => OrderEntity, order => order.id)
   @JoinColumn()
   order : OrderEntity;

}
