import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';
import { PatchRecipeDto, RecipeDto } from './dto';

@Injectable()
export class RecipeService {
  constructor(private dbService: DbService) {}

  async getRecipeWithRelations(recipeId: number) {
    return this.dbService.recipe.findUnique({
      where: { id: recipeId },
      include: {
        comments: true,
        categories: true,
        owner: true,
      },
    });
  }

  async create(
    title: string,
    description: string,
    ownerId: number,
    imageUrl?: string,
  ): Promise<RecipeDto> {
    const recipe = await this.dbService.recipe.create({
      data: {
        title,
        description,
        imageUrl,
        ownerId,
        likes: 0,
        comments: { create: [] },
        createdAt: new Date(),
      },
    });

    return {
      ...recipe,
      comments: [],
      createdAt: new Date(),
    };
  }

  async edit(recipeId: number, patch: PatchRecipeDto) {
    return this.dbService.recipe.update({
      where: { id: recipeId },
      data: {
        title: patch.title,
        description: patch.description,
      },
    });
  }

  async delete(recipeId: number) {
    return this.dbService.recipe.delete({
      where: { id: recipeId },
    });
  }

  async add_category(recipeId: number, categoryId: number) {
    return this.dbService.recipe.update({
      where: { id: recipeId },
      data: {
        categories: {
          connect: [{ id: categoryId }],
        },
      },
    });
  }

  async delete_category(recipeId: number, categoryId: number) {
    return this.dbService.recipe.update({
      where: { id: recipeId },
      data: {
        categories: {
          disconnect: [{ id: categoryId }],
        },
      },
    });
  }
}
