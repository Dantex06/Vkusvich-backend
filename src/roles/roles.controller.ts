import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { RolesService } from './roles.service';
import { CreateRoleDto, DeleteRoleDto, RoleDto } from './dto';

@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Post('create')
  @ApiCreatedResponse()
  create(@Body() body: CreateRoleDto): Promise<RoleDto> {
    return this.rolesService.create(body.name);
  }

  @Post('delete')
  @ApiOkResponse()
  delete(@Body() body: DeleteRoleDto) {
    return this.rolesService.delete(body.roleId);
  }
}
