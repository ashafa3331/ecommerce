import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { User } from 'src/user/entities/user.entity';
import { Product } from 'src/product/entities/product.entity';
import { CartEntity } from './Entity/cart.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from 'src/product/product.service';
import { OrderEntity } from 'src/order/entities/order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity, Product, CartEntity, User])],
  providers: [CartService,ProductService],
  controllers: [CartController]
})
export class CartModule {}
