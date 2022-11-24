import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { OrderEntity } from 'src/order/entities/order.entity';
import { CartEntity } from 'src/cart/Entity/cart.entity';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity, Product, CartEntity, User])],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
