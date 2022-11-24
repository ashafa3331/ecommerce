import { CartEntity } from "src/cart/Entity/cart.entity"

export class CreateProductDto {
  
    name: string
 
    
    price: number
 
    
    quantity: string
 
   
    createdAt: String
 
    
    updtedAt: String
 
    
    cart: CartEntity[]

}
