import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateAuthDto } from './authDto/create-auth.dto';
import * as argon2 from "argon2";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(@InjectRepository(User)
    private authRepository: Repository<User>, private jwt:JwtService){}


    async signUp(createAuthDto: CreateAuthDto) {
        const {email,password} = createAuthDto
        const userExist = await this.authRepository.findOne({where:{email}});
         

        if(userExist){
           throw new NotFoundException("user already exist")
           
        } 
        const user =  this.authRepository.create(createAuthDto);
         user.password = await argon2.hash(password);
         this.authRepository.save(user);
         return user;
    
      }


      async signin(createAuthDto:CreateAuthDto){

         const {email} = createAuthDto
         const user = await this.authRepository.findOne({where:{email}});
          
 
         if(!user) throw new NotFoundException("credential not valide");
         
 
         const isPasswordMatch = await argon2.verify(user.password, createAuthDto.password);
 
         if(isPasswordMatch != true) throw new UnauthorizedException("creadentials not valid");
         
         
         
         return this.signinToken(user.id,user.email);
       }

      async signinToken(id:string, email:string):Promise<{access_token:string}>{

         const payload={
         id,
           email,
         };
 
         const token =  await this.jwt.sign(payload,{expiresIn:"15m",secret:"aaaaa11111^^%GGG"});
 
         return {access_token: token };
       }
      

}
