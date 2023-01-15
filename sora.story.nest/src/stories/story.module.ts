import { Module } from '@nestjs/common';
import { StoryController } from 'src/stories/story.controller';
import { StoryReporitoy } from 'src/stories/story.repository';
import { StoryService } from 'src/stories/story.service';
import { StoryAutoMapper } from './story.automapper';

@Module({
  controllers: [StoryController],
  providers: [StoryAutoMapper, StoryService, StoryReporitoy],
})
export class StoryModule {}
