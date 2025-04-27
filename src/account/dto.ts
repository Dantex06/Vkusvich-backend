import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional } from 'class-validator';

export class AccountDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  ownerId: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  isBlocking: boolean;
}

export class PatchAccountDto {
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isBlocking?: boolean;

  @ApiProperty({
    example: 'user',
  })
  @IsOptional()
  name?: string;
}

export class AddAccountRoleDto {
  @ApiProperty({
    example: 1,
  })
  @IsOptional()
  accountId: number;

  @ApiProperty({
    example: 1,
  })
  @IsOptional()
  roleId: number;
}
