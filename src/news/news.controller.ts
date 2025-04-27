import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { RoleGuard } from '../roles/role.guard';
import { NewsService } from './news.service';
import { CreateNewsDto, DeleteNewsDto, NewsDto } from './dto';

@Controller('news')
@UseGuards(RoleGuard)
export class NewsController {
  constructor(private newsService: NewsService) {}

  @Post('create')
  @ApiCreatedResponse()
  create(@Body() body: CreateNewsDto): Promise<NewsDto> {
    return this.newsService.create(body.title, body.description, body.imageUrl);
  }

  @Post('delete')
  @ApiOkResponse()
  delete(@Body() body: DeleteNewsDto) {
    return this.newsService.delete(body.newsId);
  }
}
