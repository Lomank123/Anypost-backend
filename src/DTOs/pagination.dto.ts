import { IsInt, Min } from 'class-validator';

// TODO: Rename to PaginationInputDTO?
//  Also think about metadata dto for pagination
//  https://www.npmjs.com/package/nestjs-typeorm-paginate?activeTab=readme
export class PaginationDTO {
  @IsInt()
  @Min(1)
  page!: number;

  @IsInt()
  @Min(1)
  pageSize!: number;
}
