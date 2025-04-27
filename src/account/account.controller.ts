import { Body, Controller, Get, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { AccountDto, AddAccountRoleDto, PatchAccountDto } from './dto';
import { AccountService } from './account.service';
import { AuthGuard } from '../auth/auth.guard';
import { SessionInfo } from '../auth/session-info.decorator';
import { GetSessionInfoDto } from '../auth/dto';
import { RecipeEditGuard } from '../recipe/recipe.guard';

@Controller('account')
@UseGuards(AuthGuard)
export class AccountController {
  constructor(private accountService: AccountService) {}

  @Get()
  @ApiOkResponse({
    type: AccountDto,
  })
  getAccount(@SessionInfo() session: GetSessionInfoDto): Promise<AccountDto> {
    return this.accountService.getAccount(session.id);
  }

  @Patch()
  @ApiOkResponse({
    type: AccountDto,
  })
  patchAccount(
    @Body() body: PatchAccountDto,
    @SessionInfo() session: GetSessionInfoDto,
  ): Promise<AccountDto> {
    return this.accountService.patchAccount(session.id, body);
  }

  @Post('set-role')
  @ApiOkResponse()
  set_role(@Body() body: AddAccountRoleDto) {
    return this.accountService.setRole(body.accountId, body.roleId);
  }

  @Post('delete-role')
  @ApiOkResponse()
  delete_role(@Body() body: AddAccountRoleDto) {
    return this.accountService.removeRole(body.accountId);
  }
}
