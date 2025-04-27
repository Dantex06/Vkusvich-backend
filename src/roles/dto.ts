import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class RoleDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}

export class CreateRoleDto {
  @ApiProperty({
    example: 'example role',
  })
  @IsNotEmpty()
  name: string;
}

export class DeleteRoleDto {
  @ApiProperty({
    example: '1',
  })
  @IsNotEmpty()
  roleId: number;
}
