import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class TopicDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  recipeId: number;
}

export class CreateTopicDto {
  @ApiProperty({
    example: 1,
  })
  @IsNotEmpty()
  idRecipe: number;
}

export class DeleteTopicDto {
  @ApiProperty({
    example: '1',
  })
  @IsNotEmpty()
  topicId: number;
}
