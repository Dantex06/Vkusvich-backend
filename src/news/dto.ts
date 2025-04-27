import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class NewsDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  imageUrl: string;
}

export class CreateNewsDto {
  @ApiProperty({
    example: 'example title',
  })
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: 'example description',
  })
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    example:
      'https://i.pinimg.com/736x/40/2e/6e/402e6e3ef8f455fddfdaaf50b57d8585.jpg',
  })
  @IsNotEmpty()
  imageUrl: string;
}

export class DeleteNewsDto {
  @ApiProperty({
    example: '1',
  })
  @IsNotEmpty()
  newsId: number;
}
