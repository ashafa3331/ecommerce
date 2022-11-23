import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule,TypeOrmModule.forRoot({
    type: 'postgres',

      host: 'localhost',
      port: 5432 ,
      username: 'postgres',
      password: 'password',
      database: 'ecommerce',
    entities:[User],
    synchronize: true,
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

