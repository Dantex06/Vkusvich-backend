import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';
import {
  AddCategoryDto,
  CreateRecipeDto,
  DeleteRecipeDto,
  PatchRecipeDto,
  RecipeDto,
} from './dto';
import { RecipeService } from './recipe.service';
import { RecipeCreateGuard, RecipeEditGuard } from './recipe.guard';

@Controller('recipe')
@UseGuards(AuthGuard)
export class RecipeController {
  constructor(private recipeService: RecipeService) {}

  @Get(':id')
  async getRecipe(@Param('id') id: string) {
    return this.recipeService.getRecipeWithRelations(Number(id));
  }

  @Post('create')
  @UseGuards(RecipeCreateGuard)
  @ApiCreatedResponse()
  create(@Body() body: CreateRecipeDto): Promise<RecipeDto> {
    return this.recipeService.create(
      body.title,
      body.description,
      body.ownerId,
      body.imageUrl,
    );
  }

  @Patch()
  @UseGuards(RecipeEditGuard)
  @ApiOkResponse({
    type: RecipeDto,
  })
  edit(@Body() body: PatchRecipeDto) {
    return this.recipeService.edit(body.recipeId, body);
  }

  @Post('delete')
  @UseGuards(RecipeEditGuard)
  @ApiOkResponse()
  delete(@Body() body: DeleteRecipeDto) {
    return this.recipeService.delete(body.recipeId);
  }

  @Post('add-category')
  @UseGuards(RecipeEditGuard)
  @ApiOkResponse()
  add_category(@Body() body: AddCategoryDto) {
    return this.recipeService.add_category(body.recipeId, body.categoryId);
  }

  @Post('delete-category')
  @UseGuards(RecipeEditGuard)
  @ApiOkResponse()
  delete_category(@Body() body: AddCategoryDto) {
    return this.recipeService.delete_category(body.recipeId, body.categoryId);
  }
}
