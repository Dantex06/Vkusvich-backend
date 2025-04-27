import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';
import { CategoryDto } from './dto';

@Injectable()
export class CategoriesService {
  constructor(private dbService: DbService) {}

  async create(name: string): Promise<CategoryDto> {
    const category = await this.dbService.category.create({
      data: {
        name,
        recipes: { create: [] },
      },
    });

    return category;
  }

  async delete(categoryId: number) {
    return this.dbService.category.delete({
      where: { id: categoryId },
    });
  }
}
