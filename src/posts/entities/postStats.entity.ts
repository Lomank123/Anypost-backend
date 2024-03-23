import { BaseEntity } from '../../abstractEntities/base.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { PostReactionEntity } from './postReaction.entity';
import { PostEntity } from './post.entity';

@Entity()
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
  @JoinColumn()
  post!: PostEntity;

  @OneToMany(() => PostReactionEntity, (reaction) => reaction.stats)
  reactions!: PostReactionEntity[];

  rating(): number {
    return this.likes + this.dislikes;
  }
}
