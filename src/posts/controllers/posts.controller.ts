import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Query,
} from '@nestjs/common';
import { PostsService } from '../services/posts.service';
import { PostEntity } from '../entities/post.entity';
import { PaginationDTO } from '../../DTOs/pagination.dto';
import { CreatePostInputDTO } from '../DTOs/createPostInput.dto';
import { PostOutputDTO } from '../DTOs/postOutput.dto';
import { plainToInstance } from 'class-transformer';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async getAllPosts(
    @Query() paginationDTO: PaginationDTO,
  ): Promise<PostOutputDTO[]> {
    const posts = await this.postsService.fetchPaginatedAllPosts(paginationDTO);
    return plainToInstance(PostOutputDTO, posts);
  }

  @Get('/:id')
  async getPostById(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<PostEntity | null> {
    return await this.postsService.fetchPostById(id);
  }

  @Post()
  async createPost(
    @Body() createPostInputDTO: CreatePostInputDTO,
  ): Promise<PostOutputDTO> {
    const post = await this.postsService.createPost(createPostInputDTO);
    return plainToInstance(PostOutputDTO, post);
  }
}
