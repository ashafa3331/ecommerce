import { Product } from "src/product/entities/product.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class OrderEntity {
   @PrimaryGeneratedColumn('uuid')
   id: number

   @OneToMany(type => Product, item => item.id)
   items: Product[];

   @OneToOne(type => User, user => user.username)
   @JoinColumn()
   user : User;

   @Column()
   subTotal: number

   @Column({ default: false })
   pending: boolean

}