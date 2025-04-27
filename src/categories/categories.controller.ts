import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { CategoriesService } from './categories.service';
import { CategoryDto, CreateCategoryDto, DeleteCategoryDto } from './dto';
import { RoleGuard } from '../roles/role.guard';

@Controller('categories')
@UseGuards(RoleGuard)
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Post('create')
  @ApiCreatedResponse()
  create(@Body() body: CreateCategoryDto): Promise<CategoryDto> {
    return this.categoriesService.create(body.name);
  }

  @Post('delete')
  @ApiOkResponse()
  delete(@Body() body: DeleteCategoryDto) {
    return this.categoriesService.delete(body.categoryId);
  }
}
