import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';
import { TopicDto } from './dto';

@Injectable()
export class TopicsService {
  constructor(private dbService: DbService) {}

  async create(recipeId: number): Promise<TopicDto> {
    const topic = await this.dbService.topic.create({
      data: {
        recipeId,
      },
    });

    return topic;
  }

  async delete(topicId: number) {
    return this.dbService.topic.delete({
      where: { id: topicId },
    });
  }
}
