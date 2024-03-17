import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { USERS_ENTITIES } from './users.settings';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature(USERS_ENTITIES)],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
