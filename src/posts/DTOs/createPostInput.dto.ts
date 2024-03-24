import { IsInt, IsString, Min } from 'class-validator';

export class CreatePostInputDTO {
  @IsString()
  text!: string;

  @IsInt()
  @Min(10000)
  ttl!: number;
}
