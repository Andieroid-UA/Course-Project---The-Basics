import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://i.pinimg.com/736x/8d/c5/31/8dc531fd1168a51c9e5bc9aca0d45051--shot-recipes-the-sauce.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://i.pinimg.com/736x/8d/c5/31/8dc531fd1168a51c9e5bc9aca0d45051--shot-recipes-the-sauce.jpg'),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
