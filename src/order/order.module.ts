import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './entities/order.entity';
import { Product } from 'src/product/entities/product.entity';
import { CartEntity } from 'src/cart/Entity/cart.entity';
import { User } from 'src/user/entities/user.entity';
import { CartService } from 'src/cart/cart.service';
import { ProductService } from 'src/product/product.service';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity, Product, CartEntity, User])],
  providers: [OrderService,CartService, ProductService],
  controllers: [OrderController]
})
export class OrderModule {}
