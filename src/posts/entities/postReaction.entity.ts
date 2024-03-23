import { BaseEntity } from '../../abstractEntities/base.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { PostStatsEntity } from './postStats.entity';

@Entity()
export class PostReactionEntity extends BaseEntity {
  @ManyToOne(() => PostStatsEntity, (stats) => stats.reactions)
  stats!: PostStatsEntity;

  @Column({
    type: 'char',
    length: 1,
    unique: true,
  })
  reaction!: string;

  @Column({
    type: 'int',
    default: 0,
    unsigned: true,
  })
  count!: number;
}
