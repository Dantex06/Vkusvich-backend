import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { CommentDto } from '../comments/dto';

export class RecipeDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  ownerId: number;

  @ApiProperty()
  imageUrl?: string;

  @ApiProperty()
  likes: number;

  @ApiProperty()
  comments: CommentDto[];

  @ApiProperty()
  createdAt: Date;
}

export class CreateRecipeDto {
  @ApiProperty({
    example: 'example title',
  })
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: 'test description',
  })
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    example: 1,
  })
  @IsNotEmpty()
  ownerId: number;

  @ApiProperty({
    example:
      'https://i.pinimg.com/736x/40/2e/6e/402e6e3ef8f455fddfdaaf50b57d8585.jpg',
  })
  imageUrl?: string;
}

export class DeleteRecipeDto {
  @ApiProperty({
    example: 1,
  })
  recipeId: number;
}

export class AddCategoryDto {
  @ApiProperty({
    example: 1,
  })
  recipeId: number;

  @ApiProperty({
    example: 1,
  })
  categoryId: number;
}

export class PatchRecipeDto {
  @ApiProperty({
    example: 1,
  })
  recipeId: number;

  @ApiProperty({
    example: 'example title',
  })
  @IsOptional()
  title?: string;

  @ApiProperty({
    example: 'example description',
  })
  @IsOptional()
  description?: string;
}
