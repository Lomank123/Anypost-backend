import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { POSTS_ENTITIES } from '../posts.settings';
import { PostsService } from '../services/posts.service';
import { PostsController } from '../controllers/posts.controller';

@Module({
  imports: [TypeOrmModule.forFeature(POSTS_ENTITIES)],
  providers: [PostsService],
  controllers: [PostsController],
})
export class PostsModule {}
