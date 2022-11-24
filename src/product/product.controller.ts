import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { JwtGuard } from 'src/guard/jwt.guard';
import { DeleteResult, UpdateResult } from 'typeorm';
import { GetUser } from 'src/decorators/get-user.decorator';

@Controller('product')
export class ProductController {
  constructor(private productsService: ProductService) { }

 @UseGuards(JwtGuard)
 @Get()
 async GetAll(): Promise<Product[]> {
   return await this.productsService.getAll();

 }

 @UseGuards(JwtGuard)
 @Post('addProduct')
 async Create(@GetUser('id') id:string, @Body() createProductDto: CreateProductDto):Promise<Product> {
   return await this.productsService.create(id, createProductDto);
 }


 @UseGuards(JwtGuard)
 @Get(':id')
 async GetOne(@Param() id: number): Promise<Product> {
   return await this.productsService.getOne(id);

 }

 @UseGuards(JwtGuard)
 @Put(':id')
 async Update(@Param() id: number, @Body() product: Product, @GetUser('email') email:string): Promise<UpdateResult> {
   return await this.productsService.update(id, product, email);

 }

 @UseGuards(JwtGuard)
 @Delete(':id')
 async Delete(@Param() id: number, @GetUser('email') email:string): Promise<DeleteResult> {
   return await this.productsService.delete(id, email);

 }
}
