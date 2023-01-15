import { Injectable } from '@nestjs/common';
import { RequestPagedDto, ResponsePagedDto } from 'src/dtos/grid.dto';
import { Story } from 'src/stories/story.entity';
import { DataSource, Repository } from 'typeorm';

/**
 * Repository của truyện
 */
@Injectable()
export class StoryReporitoy extends Repository<Story> {
  /**
   * Khởi tạo
   * @param dataSource
   */
  constructor(private readonly dataSource: DataSource) {
    super(Story, dataSource.manager);
  }

  async getList(input: RequestPagedDto) {
    let res = new ResponsePagedDto<Story>();

    res.totalRecord = await this.count();

    if (res.totalRecord == 0) {
      return res;
    }

    res.items = await this.find();
    return res;
  }
}
