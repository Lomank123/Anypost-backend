import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from '../entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostEntity)
    private postsRepository: Repository<PostEntity>,
  ) {}

  fetchAllPosts(): Promise<PostEntity[]> {
    return this.postsRepository.find();
  }

  fetchPostById(id: string): Promise<PostEntity | null> {
    return this.postsRepository.findOneBy({ id });
  }
}
