import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Story } from '../stories/story.entity';
import { User } from '../users/user.entity';

@Injectable()
export default class TypeOrmConfigService {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: this.configService.get<string>('database.host'),
      port: this.configService.get<number>('database.port'),
      username: this.configService.get<string>('database.user'),
      password: this.configService.get<string>('database.pass'),
      database: this.configService.get<string>('database.name'),
      entities: [Story, User],
    };
  }
}
