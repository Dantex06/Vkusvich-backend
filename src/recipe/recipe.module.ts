import { Module } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { RecipeController } from './recipe.controller';
import { DbModule } from '../db/db.module';

@Module({
  imports: [DbModule],
  providers: [RecipeService],
  controllers: [RecipeController],
})
export class RecipeModule {}
