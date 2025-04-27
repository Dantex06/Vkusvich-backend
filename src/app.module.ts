import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AccountModule } from './account/account.module';
import { RecipeModule } from './recipe/recipe.module';
import { CommentsModule } from './comments/comments.module';
import { CategoriesModule } from './categories/categories.module';
import { RolesModule } from './roles/roles.module';
import { TopicsModule } from './topics/topics.module';
import { NewsModule } from './news/news.module';

@Module({
  imports: [
    DbModule,
    AuthModule,
    UsersModule,
    AccountModule,
    RecipeModule,
    CommentsModule,
    CategoriesModule,
    RolesModule,
    TopicsModule,
    NewsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
