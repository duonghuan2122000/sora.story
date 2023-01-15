import { AutoMap } from '@automapper/classes';
import { Column } from 'typeorm';

export class BaseEntity {
  /**
   * Thời gian tạo
   */
  @AutoMap()
  @Column({ name: 'created_date' })
  createdDate: Date;

  /**
   * Thời gian cập nhật
   */
  @AutoMap()
  @Column({ name: 'updated_date' })
  updatedDate: Date;

  /**
   * Khởi tạo
   */
  constructor() {
    this.createdDate = new Date();
    this.updatedDate = new Date();
  }
}
