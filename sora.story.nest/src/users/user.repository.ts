import { Injectable } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { User } from 'src/users/user.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private readonly dataSource: DataSource) {
    super(User, dataSource.manager);
  }

  /**
   * Lấy thông tin user bằng email
   */
  async getByEmail(email: string): Promise<User | undefined> {
    let user = await this.findOneBy({ email });
    return user;
  }
}
