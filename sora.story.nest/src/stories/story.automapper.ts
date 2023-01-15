import { createMap, Mapper, MappingProfile } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { StoryDto } from './story.dto';
import { Story } from './story.entity';

@Injectable()
export class StoryAutoMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }
  override get profile(): MappingProfile {
    return (mapper) => {
      createMap(mapper, Story, StoryDto);
    };
  }
}
