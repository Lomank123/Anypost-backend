import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from '../services/posts.service';
import { PostEntity } from '../entities/post.entity';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async getAllPosts(): Promise<PostEntity[]> {
    return await this.postsService.fetchAllPosts();
  }

  @Get('/:id')
  async getPostById(
    @Param() params: { [key: string]: any },
  ): Promise<PostEntity | null> {
    return await this.postsService.fetchPostById(params.id);
  }
}
