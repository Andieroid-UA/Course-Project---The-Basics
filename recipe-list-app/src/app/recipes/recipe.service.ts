import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://i.pinimg.com/736x/8d/c5/31/8dc531fd1168a51c9e5bc9aca0d45051--shot-recipes-the-sauce.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://i.pinimg.com/736x/8d/c5/31/8dc531fd1168a51c9e5bc9aca0d45051--shot-recipes-the-sauce.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]),
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
