import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { DbModule } from '../db/db.module';
import { RolesModule } from '../roles/roles.module';

@Module({
  imports: [DbModule, RolesModule],
  controllers: [AccountController],
  providers: [AccountService],
  exports: [AccountService],
})
export class AccountModule {}
