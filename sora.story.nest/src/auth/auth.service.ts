import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from 'src/users/user.service';
import { RequestAuthDto, ResponseAuthDto } from './auth.dto';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  /**
   * Khởi tạo
   */
  constructor(
    private userService: UserService,
    private configService: ConfigService,
    private jwtService: JwtService,
  ) {}

  /**
   * kiểm tra thông tin user đăng nhập
   * @param email
   * @param password
   */
  async validateUser(email: string, password: string) {
    const user = await this.userService.getByEmail(email);
    if (user && !!(await user.verifyPassword(password))) {
      return user;
    }
    return null;
  }

  async validateUserByEmail(email: string) {
    const user = await this.userService.getByEmail(email);
    return user;
  }

  async login(requestAuthDto: RequestAuthDto) {
    const user = await this.validateUser(
      requestAuthDto.email,
      requestAuthDto.password,
    );
    if (!user) {
      throw new HttpException(
        {
          errorCode: 'E1000',
          errorMessage: 'Thông tin đăng nhập không chính xác',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    let responseAuthDto = new ResponseAuthDto();
    responseAuthDto.token = this.jwtService.sign({
      sub: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    });

    return responseAuthDto;
  }
}
