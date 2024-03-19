import { BaseEntity } from '../../abstractEntities/base.entity';
import { Column, OneToMany, OneToOne } from 'typeorm';
import { PostReactionEntity } from './postReaction.entity';
import { PostEntity } from './post.entity';

export class PostStatsEntity extends BaseEntity {
  @Column({
    type: 'int',
    default: 0,
    unsigned: true,
  })
  likes!: number;

  @Column({
    type: 'int',
    default: 0,
    unsigned: true,
  })
  dislikes!: number;

  @OneToOne(() => PostEntity, (post) => post.stats)
  post!: PostEntity;

  @OneToMany(() => PostReactionEntity, (reaction) => reaction.stats)
  reactions!: PostReactionEntity[];

  rating(): number {
    return this.likes + this.dislikes;
  }
}
