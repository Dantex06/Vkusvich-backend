import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class SingUpBodyDto {
  @ApiProperty({
    example: 'test@mail.ru',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'test',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: '12345678',
  })
  @IsNotEmpty()
  password: string;
}

export class SingInBodyDto {
  @ApiProperty({
    example: 'test@mail.ru',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: '12345678',
  })
  @IsNotEmpty()
  password: string;
}

export class GetSessionInfoDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  iat: number;
  @ApiProperty()
  exp: number;
}
