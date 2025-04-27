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
import { DbService } from '../db/db.service';

@Injectable()
export class RecipeEditGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private dbService: DbService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest() as Request;
    const token = req.cookies[CookieService.tokenKey];

    const sessionInfo = await this.jwtService.verifyAsync(token, {
      secret: process.env.JWT_SECRET,
    });

    const recipeId = Number(req.body.recipeId);

    const recipe = await this.dbService.recipe.findFirst({
      where: {
        id: recipeId,
        ownerId: sessionInfo.id,
      },
    });

    if (!recipe) {
      throw new ForbiddenException();
    }
    return true;
  }
}

@Injectable()
export class RecipeCreateGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest() as Request;
    const token = req.cookies[CookieService.tokenKey];

    const sessionInfo = await this.jwtService.verifyAsync(token, {
      secret: process.env.JWT_SECRET,
    });

    const ownerId = Number(req.body.ownerId);

    const result = ownerId === sessionInfo.id;

    if (!result) {
      throw new ForbiddenException();
    }
    return true;
  }
}
