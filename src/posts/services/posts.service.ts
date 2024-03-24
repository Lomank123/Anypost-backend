import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from '../entities/post.entity';
import { PaginationDTO } from '../../DTOs/pagination.dto';
import { CreatePostInputDTO } from '../DTOs/createPostInput.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostEntity)
    private postsRepository: Repository<PostEntity>,
  ) {}

  fetchPaginatedAllPosts(paginationDTO: PaginationDTO): Promise<PostEntity[]> {
    const { page = 1, pageSize = 10 } = paginationDTO;
    const skip = (page - 1) * pageSize;
    return this.postsRepository.find({
      take: pageSize,
      skip,
    });
  }

  fetchPostById(id: string): Promise<PostEntity | null> {
    return this.postsRepository.findOneBy({ id });
  }

  createPost(createPostInputDTO: CreatePostInputDTO): Promise<PostEntity> {
    const entity = this.postsRepository.create({ ...createPostInputDTO });
    // TODO: Add stats generation here (also add them to output dto)
    return this.postsRepository.save(entity);
  }
}
