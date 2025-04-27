import { Module } from '@nestjs/common';
import { TopicsController } from './topics.controller';
import { TopicsService } from './topics.service';
import { DbModule } from '../db/db.module';
import { RolesModule } from '../roles/roles.module';

@Module({
  imports: [DbModule, RolesModule],
  controllers: [TopicsController],
  providers: [TopicsService],
})
export class TopicsModule {}
