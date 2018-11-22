import { Component, OnInit, Injectable } from '@angular/core';
import { Recipe } from '../recipe';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  private recipesURL = "";
  private recipesSaveURL = "";

  //The constructor and HTTP requests are
  //Based off https://angular.io/tutorial/toh-pt6
  constructor(/*private http: HttpClient*/) {
  }
/*
  getRecipes (): Observable<Recipe[]> {
  return this.http.get<Recipe[]>(this.recipesURL)
    .pipe(
      catchError(this.handleError('getRecipes',[]))
    );
  }



  private handleError<T> (operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    }
  }
*/

  ngOnInit() {
  }

}
