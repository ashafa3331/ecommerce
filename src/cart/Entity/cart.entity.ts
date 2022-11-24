import { Product } from "src/product/entities/product.entity"
import { User } from "src/user/entities/user.entity"
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class CartEntity {
   @PrimaryGeneratedColumn('uuid')
   id: number

   @Column()
   total: number

   @Column()
   quantity: number
  
   @ManyToOne(type => Product, order => order.id)
   @JoinColumn()
   item: Product

   @ManyToOne(type => User, user => user.username)
   @JoinColumn()
   user: User
}