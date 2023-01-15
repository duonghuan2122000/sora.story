import { MapInterceptor } from '@automapper/nestjs';
import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { RequestPagedDto } from 'src/dtos/grid.dto';
import { StoryService } from 'src/stories/story.service';
import { StoryDto } from './story.dto';

@Controller('stories')
export class StoryController {
  constructor(private readonly storyService: StoryService) {}

  @Post()
  async getList(@Body() input: RequestPagedDto) {
    throw new HttpException(
      { errorCode: 'E1000', errorMessage: 'Lỗi' },
      HttpStatus.BAD_REQUEST,
    );
    return await this.storyService.getList(input);
  }
}
