import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { CreateTopicDto, DeleteTopicDto, TopicDto } from './dto';
import { TopicsService } from './topics.service';
import { RoleGuard } from '../roles/role.guard';

@Controller('topics')
@UseGuards(RoleGuard)
export class TopicsController {
  constructor(private topicService: TopicsService) {}

  @Post('create')
  @ApiCreatedResponse()
  create(@Body() body: CreateTopicDto): Promise<TopicDto> {
    return this.topicService.create(body.idRecipe);
  }

  @Post('delete')
  @ApiOkResponse()
  delete(@Body() body: DeleteTopicDto) {
    return this.topicService.delete(body.topicId);
  }
}
