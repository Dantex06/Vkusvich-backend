import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';
import { RoleDto } from './dto';

@Injectable()
export class RolesService {
  constructor(private dbService: DbService) {}

  async getRoleIdByName(roleName: string): Promise<number | null> {
    const role = await this.dbService.role.findUnique({
      where: {
        name: roleName,
      },
      select: {
        id: true,
      },
    });

    return role?.id ?? null; // Возвращаем ID или null если роль не найдена
  }

  async getAccountWithRole(accountId: number) {
    return this.dbService.account.findUnique({
      where: { id: accountId },
      include: {
        role: true,
      },
    });
  }

  async create(name: string): Promise<RoleDto> {
    const role = await this.dbService.role.create({
      data: {
        name: name,
        accounts: { create: [] },
      },
    });

    return role;
  }

  async delete(roleId: number) {
    return this.dbService.role.delete({
      where: { id: roleId },
    });
  }
}
