import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Recipe } from '../recipe';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers : new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  showEquipment = false;
  showIngredients = false;
  showRecipes = false;

  userid = 0;

  recipeClicked(){
    this.showEquipment = false;
    this.showIngredients = false;
    this.showRecipes = false;
  }


  equipmentClicked(){
    this.showEquipment = true;
    this.showIngredients = false;
    this.showRecipes = false;
  }

  ingredientsClicked(){
    this.showEquipment = false;
    this.showIngredients = true;
    this.showRecipes = false;
  }

  dbrecipesClicked(){
    this.showEquipment = false;
    this.showIngredients = false;
    this.showRecipes = true;
  }

  //Constructor definition based off:
  //https://angular.io/tutorial/toh-pt6
  constructor(private http: HttpClient) {}

  ngOnInit() {}


}
