import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common/decorators';
import { RequestPagedDto, ResponsePagedDto } from 'src/dtos/grid.dto';
import { StoryReporitoy } from 'src/stories/story.repository';
import { StoryDto } from './story.dto';
import { Story } from './story.entity';

/**
 * Story service
 */
@Injectable()
export class StoryService {
  constructor(
    private readonly storyRepository: StoryReporitoy,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  /**
   * Lấy danh sách bản ghi truyện có phân trang
   * @returns
   */
  async getList(input: RequestPagedDto) {
    let res = new ResponsePagedDto<StoryDto>();
    let resRepo = await this.storyRepository.getList(input);
    res.totalRecord = resRepo.totalRecord;
    res.items = this.mapper.mapArray(resRepo.items, Story, StoryDto);
    return res;
  }
}
