import { AutoMap } from '@automapper/classes';

export class StoryDto {
  /**
   * Khóa chính
   */
  @AutoMap()
  id: string;

  /**
   * Tên
   */
  @AutoMap()
  name: string;

  /**
   * Tên slug truyện
   */
  @AutoMap()
  slug: string;

  /**
   * Tóm tắt
   */
  @AutoMap()
  description: string;

  /**
   * Thời gian tạo
   */
  @AutoMap()
  createdDate: Date;

  /**
   * Thời gian cập nhật
   */
  @AutoMap()
  updatedDate: Date;
}
