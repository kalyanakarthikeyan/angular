import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('test recipe', 'this is just a test', 'https://thumbs.dreamstime.com/b/indian-dosa-special-food-made-rice-lentils-south-india-84751483.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
