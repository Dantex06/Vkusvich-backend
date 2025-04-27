import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import { CookieService } from '../auth/cookie.service';
import * as process from 'node:process';
import { RolesService } from './roles.service';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private roleSerivce: RolesService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest() as Request;
    const token = req.cookies[CookieService.tokenKey];

    const sessionInfo = await this.jwtService.verifyAsync(token, {
      secret: process.env.JWT_SECRET,
    });

    const roleAccount = await this.roleSerivce.getAccountWithRole(
      sessionInfo.id,
    );

    if (roleAccount.role?.name !== 'Admin') {
      throw new ForbiddenException();
    }
    return true;
  }
}
