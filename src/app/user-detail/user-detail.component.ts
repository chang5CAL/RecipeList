import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { Recipe } from '../recipe';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers : new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})

export class UserDetailComponent implements OnInit {
  userid = 0;
  recipeid = 0;
  Recipes = [];

  private userRecipesURL = "den1.mssql7.gear.host/user/read/recipe/" + this.userid;
  private userDeleteRecipesURL = "den1.mssql7.gear.host/user/delete/recipe/"+this.recipeid+"/"+this.userid;


  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.getUserRecipes().subscribe(Recipe => this.Recipes = Recipe);
  }

  removeRecipe(id: number): void {
    this.userDeleteRecipesURL = "localhost:3000/user/delete/recipe/"+id+"/"+this.userid;
    this.deleteUserRecipes(id).subscribe();
  }
    //HTTP request from
    //https://github.com/kuncevic/angular-httpclient-examples/blob/master/client/src/app/app.component.ts

      getUserRecipes (): Observable<Recipe[]> {
      return this.http.get<Recipe[]>(this.userRecipesURL)
        .pipe(
          catchError(this.handleError('getUserRecipes',[]))
        );
      }


      deleteUserRecipes (id: number): Observable<{}> {
        const url = this.userDeleteRecipesURL;
        return this.http.delete(url,httpOptions).pipe(
          catchError(this.handleError('deleteUserRecipes'))
        );
      }
      private handleError<T> (operation = 'operation', result?: T){
        return (error: any): Observable<T> => {
          console.error(error);

          return of(result as T);
        }
      }

}
