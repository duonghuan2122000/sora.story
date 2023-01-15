import { AutoMap } from '@automapper/classes';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { BaseEntity } from '../data/entities/base.entity';
import * as bcrypt from 'bcrypt';

const saltRounds = 10;

@Entity({
  name: 'user',
})
export class User extends BaseEntity {
  /**
   * Khóa chính
   */
  @AutoMap()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * Tên
   */
  @AutoMap()
  @Column({ name: 'first_name' })
  firstName: string;

  /**
   * Họ và tên đệm
   */
  @AutoMap()
  @Column({ name: 'last_name' })
  lastName: string;

  /**
   * email
   */
  @AutoMap()
  @Column({ name: 'email' })
  email: string;

  /**
   * Mật khẩu đã hash
   */
  @Column({ name: 'password_hash' })
  passwordHash: string;

  /**
   * Khởi tạo
   */
  constructor() {
    super();
    this.id = uuidv4();
  }

  /**
   * verify mật khẩu
   */
  async verifyPassword(passwordPlain: string): Promise<Boolean> {
    let valid = await bcrypt.compare(passwordPlain, this.passwordHash);
    return valid;
  }

  async hashPassword(passwordPlain: string) {
    this.passwordHash = await bcrypt.hash(passwordPlain, saltRounds);
  }
}
