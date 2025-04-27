import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CommentDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  userId: number;

  @ApiProperty()
  message: string;

  @ApiProperty()
  likes: number;

  @ApiProperty()
  recipeId: number;
}

export class CreateCommentDto {
  @ApiProperty({
    example: '1',
  })
  @IsNotEmpty()
  userId: number;

  @ApiProperty({
    example: 'comment text',
  })
  @IsNotEmpty()
  message: string;

  @ApiProperty({
    example: '1',
  })
  @IsNotEmpty()
  recipeId: number;
}

export class DeleteCommentDto {
  @ApiProperty({
    example: 1,
  })
  commentId: number;
}

export class PatchCommentDto {
  @ApiProperty({
    example: 1,
  })
  commentId: number;

  @ApiProperty({
    example: 'example message',
  })
  message: string;
}
