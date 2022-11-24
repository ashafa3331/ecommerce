import { PartialType } from '@nestjs/mapped-types';
import { CartEntity } from 'src/cart/Entity/cart.entity';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {


    
    name: string
 
    
    price: number
 
    
    quantity: string
 
   
    createdAt: String
 
    
    updtedAt: String
 
    
    cart: CartEntity[]
}
