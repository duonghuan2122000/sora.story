import { Injectable } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

/**
 * Authen truyền thống
 */
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  /**
   * Khởi tạo
   * @param authService
   */
  constructor(private authService: AuthService) {
    super();
  }

  /**
   * validate user đăng nhập
   */
  async validate(email: string, password: string) {
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
