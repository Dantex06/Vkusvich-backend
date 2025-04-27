import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CategoryDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}

export class CreateCategoryDto {
  @ApiProperty({
    example: 'example title',
  })
  @IsNotEmpty()
  name: string;
}

export class DeleteCategoryDto {
  @ApiProperty({
    example: '1',
  })
  @IsNotEmpty()
  categoryId: number;
}
