import { Expose } from 'class-transformer';
import { IsBoolean, IsDate, IsInt, IsString, IsUUID } from 'class-validator';

export class PostOutputDTO {
  @Expose()
  @IsUUID()
  id!: string;

  @Expose()
  @IsString()
  text!: string;

  @Expose()
  @IsInt()
  ttl!: number;

  @Expose()
  @IsBoolean()
  isOutdated!: boolean;

  @Expose()
  @IsDate()
  createdAt!: Date;

  @Expose()
  @IsDate()
  updatedAt!: Date;
}
