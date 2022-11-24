import { Body, ClassSerializerInterceptor, Controller, Post, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './authDto/create-auth.dto';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}
    
  @UseInterceptors(ClassSerializerInterceptor)
  @Post('/signup')
  signUp(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.signUp(createAuthDto);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Post('/login')
  signin(@Body() createAuthDto:CreateAuthDto){
    return this.authService.signin(createAuthDto);

  }
}
