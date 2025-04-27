import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { DbModule } from '../db/db.module';
import { AccountModule } from '../account/account.module';
import { RolesModule } from '../roles/roles.module';

@Module({
  imports: [DbModule, AccountModule, RolesModule],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
