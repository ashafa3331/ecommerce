import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { OrderEntity } from 'src/order/entities/order.entity';
import { Product } from 'src/product/entities/product.entity';
import { CartEntity } from 'src/cart/Entity/cart.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity, Product, CartEntity, User])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
