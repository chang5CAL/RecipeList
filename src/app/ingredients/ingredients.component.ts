import { Component, OnInit } from '@angular/core';import { Equipment } from '../equipment'
import { Ingredient } from '../ingredient';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers : new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  userid = 0;
  ingredientid = "";
  Ingredients = [];

  private userIngredientsURL = "den1.mssql7.gear.host/user/read/ingredient/" + this.userid;

  private userDeleteIngredientsURL = "den1.mssql7.gear.host/user/delete/ingredient/" + this.ingredientid + "/" + this.userid;

  private userUpdateIngredientsURL = "den1.mssql7.gear.host/user/update/ingredient/" + this.ingredientid + "/" + this.userid;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    //this.getUserIngredients().subscribe(Ingredient => this.Ingredients = Ingredient);
  }

    //HTTP request from
    //https://github.com/kuncevic/angular-httpclient-examples/blob/master/client/src/app/app.component.ts

      getUserIngredients (): Observable<Ingredient[]> {
      return this.http.get<Ingredient[]>(this.userIngredientsURL)
        .pipe(
          catchError(this.handleError('getUserIngredients',[]))
        );
      }

      deleteUserIngredients (id: number): Observable<{}> {
        const url = this.userDeleteIngredientsURL;
        return this.http.delete(url,httpOptions).pipe(
          catchError(this.handleError('deleteUserIngredients'))
        );
      }

      private handleError<T> (operation = 'operation', result?: T){
        return (error: any): Observable<T> => {
          console.error(error);

          return of(result as T);
        }
      }

}
