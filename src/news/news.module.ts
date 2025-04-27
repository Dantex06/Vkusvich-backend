import { Module } from '@nestjs/common';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import { DbModule } from '../db/db.module';
import { RolesModule } from '../roles/roles.module';

@Module({
  imports: [DbModule, RolesModule],
  controllers: [NewsController],
  providers: [NewsService],
})
export class NewsModule {}
