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
  User: User = {
  id: 1,
  username: "Justin",
  password: "password",
  savedRecipes: ["Sandwich"],
  equipment: ["None"],
  ingredients: ["Bread,Ham"]
  };
  showEquipment = false;
  showIngredients = false;

  private userRecipesURL = "/user/read/recipe/";
  private userIngredientsURL = "/user/read/ingredient/";
  private userEquipmentURL = "/user/read/equipment/";

  private userDeleteRecipesURL = "/user/delete/recipe/";
  private userDeleteIngredientsURL = "/user/delete/ingredient/";
  private userDeleteEquipmentURL = "/user/delete/equipment/";

  private userUpdateIngredientsURL = "/user/update/ingredient/";


  recipeClicked(){
    this.showEquipment = false;
    this.showIngredients = false;
  }


  equipmentClicked(){
    this.showEquipment = true;
    this.showIngredients = false;
  }

  ingredientsClicked(){
    this.showEquipment = false;
    this.showIngredients = true;
  }

  //Constructor definition based off:
  //https://angular.io/tutorial/toh-pt6
  constructor(/*private http: HttpClient*/) {}

  ngOnInit() {}

  //HTTP request from
  //https://github.com/kuncevic/angular-httpclient-examples/blob/master/client/src/app/app.component.ts
/*
    getUserRecipes (): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.userRecipesURL)
      .pipe(
        catchError(this.handleError('getUserRecipes',[]))
      );
    }

    getUserIngredients (): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipesURL)
      .pipe(
        catchError(this.handleError('getRecipes',[]))
      );
    }

    getUserEquipment (): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipesURL)
      .pipe(
        catchError(this.handleError('getRecipes',[]))
      );
    }

    eraseUserRecipes (recipe: Recipe | id): Observable<Recipe[]> {
    const deleteid = typeof recipe === 'id' ? recipe : recipe.id;
    const url = this.userDeleteRecipesURL + deleteid;

    return this.http.get<Recipe[]>(url, httpOptions)
      .pipe(
        catchError(this.handleError('deleteUserRecipe'))
      );
    }
/*
    eraseUserIngredients (): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipesURL)
      .pipe(
        catchError(this.handleError('getRecipes',[]))
      );
    }

    eraseUserEquipment (): Observable<Recipe[]> {
    return this.http.delete<Recipe[]>(this.recipesURL)
      .pipe(
        catchError(this.handleError('getRecipes',[]))
      );
    }

    updateUserIngredients (): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipesURL)
      .pipe(
        catchError(this.handleError('getRecipes',[]))
      );
    }
*/
    private handleError<T> (operation = 'operation', result?: T){
      return (error: any): Observable<T> => {
        console.error(error);

        return of(result as T);
      }
    }


}
