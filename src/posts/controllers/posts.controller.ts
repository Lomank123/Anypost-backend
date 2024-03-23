import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { PostsService } from '../services/posts.service';
import { PostEntity } from '../entities/post.entity';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async getAllPosts(): Promise<PostEntity[]> {
    // TODO: Add pagination
    return await this.postsService.fetchAllPosts();
  }

  @Get('/:id')
  async getPostById(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<PostEntity | null> {
    return await this.postsService.fetchPostById(id);
  }

  // TODO: Add Create/Edit methods. Edit is tricky
}
