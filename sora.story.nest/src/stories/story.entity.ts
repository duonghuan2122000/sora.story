import { AutoMap } from '@automapper/classes';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { BaseEntity } from '../data/entities/base.entity';

@Entity({
  name: 'story',
})
export class Story extends BaseEntity {
  /**
   * Khóa chính
   */
  @AutoMap()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * Tên truyện
   */
  @AutoMap()
  @Column({ name: 'name' })
  name: string;

  /**
   * slug truyện
   */
  @AutoMap()
  @Column({ name: 'slug' })
  slug: string;

  /**
   * Tóm tắt truyện
   */
  @AutoMap()
  @Column({ name: 'description' })
  description: string;

  /**
   * Khởi tạo
   */
  constructor() {
    super();
    this.id = uuidv4();
  }
}
