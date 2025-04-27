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
export class CommentEditGuard implements CanActivate {
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

    const commentId = Number(req.body.commentId);

    const comment = await this.dbService.comment.findFirst({
      where: {
        id: commentId,
        userId: sessionInfo.id,
      },
    });

    if (!comment) {
      throw new ForbiddenException();
    }
    return true;
  }
}

@Injectable()
export class CommentCreateGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest() as Request;
    const token = req.cookies[CookieService.tokenKey];

    const sessionInfo = await this.jwtService.verifyAsync(token, {
      secret: process.env.JWT_SECRET,
    });

    const userId = Number(req.body.userId);

    const result = userId === sessionInfo.id;

    if (!result) {
      throw new ForbiddenException();
    }
    return true;
  }
}
