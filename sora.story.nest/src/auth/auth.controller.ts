import { Body, Controller, Get, Post } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { RequestAuthDto } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() requestAuthDto: RequestAuthDto) {
    return await this.authService.login(requestAuthDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  auth() {
    return 'ok';
  }
}
