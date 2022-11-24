import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from 'src/user/entities/user.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(@InjectRepository(Product) private productRepository: Repository<Product>,
  @InjectRepository(User) private userRepository: Repository<User>) { }


  async getAll(): Promise<Product[]> {
    return await this.productRepository.find()
}

async create( id: string,createProductDto: CreateProductDto): Promise<Product> {
  const user =  await this.userRepository.findOne({where:{id}});
    if (user.role == 'admin') {
        return await this.productRepository.save(createProductDto);

    }
    throw new UnauthorizedException();

}

async getOne(id: number): Promise<Product> {
    return this.productRepository.findOne({where:{id}});
}

async update(id: number, product: Product,email: string): Promise<UpdateResult> {
  const user =  await this.userRepository.findOne({where:{email }});
    if (user.role == 'admin') {
        return await this.productRepository.update(id, product);
    }
    throw new UnauthorizedException();
}

async delete(id: number, email: string): Promise<DeleteResult> {
  const user =  await this.userRepository.findOne({where:{email }});
    if (user.role == 'admin') {
        return await this.productRepository.delete(id);
    }
    throw new UnauthorizedException();
}
}
