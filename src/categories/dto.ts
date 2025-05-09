import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CategoryDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  imageUrl: string;
}

export class CreateCategoryDto {
  @ApiProperty({
    example: 'example title',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example:
      'https://i.pinimg.com/736x/40/2e/6e/402e6e3ef8f455fddfdaaf50b57d8585.jpg',
  })
  imageUrl: string;
}

export class DeleteCategoryDto {
  @ApiProperty({
    example: '1',
  })
  @IsNotEmpty()
  categoryId: number;
}
