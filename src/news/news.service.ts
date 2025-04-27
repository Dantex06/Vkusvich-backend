import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';
import { NewsDto } from './dto';

@Injectable()
export class NewsService {
  constructor(private dbService: DbService) {}

  async create(
    title: string,
    description: string,
    imageUrl: string,
  ): Promise<NewsDto> {
    const news = await this.dbService.news.create({
      data: {
        title,
        description,
        imageUrl,
      },
    });

    return news;
  }

  async delete(newsId: number) {
    return this.dbService.news.delete({
      where: { id: newsId },
    });
  }
}
