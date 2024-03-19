import { BaseEntity } from '../../abstractEntities/base.entity';
import { Column, OneToOne } from 'typeorm';
import { PostStatsEntity } from './postStats.entity';

export class PostEntity extends BaseEntity {
  @Column({
    type: 'text',
    default: '',
  })
  text!: string;

  // Time-To-Live - for how long will the message persist in milliseconds
  @Column({
    type: 'int',
    default: 0,
    unsigned: true,
  })
  ttl!: number;

  @OneToOne(() => PostStatsEntity, (stats) => stats.post)
  stats!: PostStatsEntity;

  isOutdated(): boolean {
    return this.createdAt.getUTCMilliseconds() + this.ttl > Date.now();
  }
}
