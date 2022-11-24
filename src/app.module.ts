import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';
import { OrderEntity } from './order/entities/order.entity';
import { Product } from './product/entities/product.entity';
import { CartEntity } from './cart/Entity/cart.entity';

@Module({
  imports: [UserModule,TypeOrmModule.forRoot({
    type: 'postgres',

      host: 'localhost',
      port: 5432 ,
      username: 'postgres',
      password: 'password',
      database: 'ecommerce',
    entities:[OrderEntity, Product, CartEntity, User],
    synchronize: true,
  }), AuthModule, ProductModule, CartModule, OrderModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

