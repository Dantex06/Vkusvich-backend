import { Injectable } from '@nestjs/common';
import { PatchAccountDto } from './dto';
import { DbService } from '../db/db.service';
import { RolesService } from '../roles/roles.service';

@Injectable()
export class AccountService {
  constructor(
    private db: DbService,
    private roleService: RolesService,
  ) {}

  async getAccount(userId: number) {
    return this.roleService.getAccountWithRole(userId);
  }

  async patchAccount(userId: number, patch: PatchAccountDto) {
    return this.db.account.update({
      where: { ownerId: userId },
      data: { ...patch },
    });
  }

  async create(userId: number, name: string) {
    return this.db.account.create({
      data: {
        ownerId: userId,
        name: name,
        isBlocking: false,
      },
    });
  }

  async setRole(accountId: number, roleId: number) {
    return this.db.account.update({
      where: { id: accountId },
      data: {
        roleId: roleId,
      },
    });
  }

  async removeRole(accountId: number) {
    return this.db.account.update({
      where: { id: accountId },
      data: {
        roleId: null,
      },
    });
  }
}
