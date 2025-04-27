import { Body, Controller, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import {
  CommentDto,
  CreateCommentDto,
  DeleteCommentDto,
  PatchCommentDto,
} from './dto';
import { CommentsService } from './comments.service';
import { CommentCreateGuard, CommentEditGuard } from './comments.guard';
import { AuthGuard } from '../auth/auth.guard';

@Controller('comments')
@UseGuards(AuthGuard)
export class CommentsController {
  constructor(private commentService: CommentsService) {}

  @Post('create')
  @UseGuards(CommentCreateGuard)
  @ApiCreatedResponse()
  create(@Body() body: CreateCommentDto): Promise<CommentDto> {
    return this.commentService.create(body.userId, body.message, body.recipeId);
  }

  @Post('delete')
  @UseGuards(CommentEditGuard)
  @ApiOkResponse()
  delete(@Body() body: DeleteCommentDto) {
    return this.commentService.delete(body.commentId);
  }

  @Patch()
  @UseGuards(CommentEditGuard)
  @ApiOkResponse({
    type: CommentDto,
  })
  edit(@Body() body: PatchCommentDto) {
    return this.commentService.edit(body.commentId, body);
  }
}
