import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';
import { CommentDto, PatchCommentDto } from './dto';

@Injectable()
export class CommentsService {
  constructor(private dbSevice: DbService) {}

  async edit(commentId: number, patch: PatchCommentDto) {
    return this.dbSevice.comment.update({
      where: { id: commentId },
      data: { message: patch.message },
    });
  }

  async create(
    userId: number,
    message: string,
    recipeId: number,
  ): Promise<CommentDto> {
    return this.dbSevice.comment.create({
      data: {
        userId,
        message,
        recipeId,
        likes: 0,
      },
    });
  }

  async delete(commentId: number) {
    return this.dbSevice.comment.delete({
      where: { id: commentId },
    });
  }
}
