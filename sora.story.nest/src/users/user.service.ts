import { Injectable } from '@nestjs/common';
import { Timeout } from '@nestjs/schedule';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  /**
   * Khởi tạo
   * @param userRepository
   */
  constructor(private userRepository: UserRepository) {}

  /**
   * Lấy thông tin user bằng email
   */
  async getByEmail(email: string): Promise<User | undefined> {
    return await this.userRepository.getByEmail(email);
  }

  /**
   * Seed user mặc định
   */
  @Timeout(1000)
  async seedDefaultUser() {
    let email = 'duong.huan2122000@gmail.com';
    if (!(await this.getByEmail(email))) {
      let defaultUser = new User();
      defaultUser.email = email;
      await defaultUser.hashPassword('123456');
      defaultUser.firstName = 'Huân';
      defaultUser.lastName = 'Dương';
      await this.userRepository.insert(defaultUser);
    }
  }
}
