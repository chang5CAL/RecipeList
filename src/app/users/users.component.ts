import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  //HTTP request from
  //https://github.com/kuncevic/angular-httpclient-examples/blob/master/client/src/app/app.component.ts
  callServerAddRecipe(port){
  //Server number is hard coded here.
  const headers = new HttpHeaders()
    //.set('Authorization','my-auth-token')
    .set('Content-Type','application/json');
    this.http.post<String>('/user/add/recipe/user1/test',JSON.stringify(this.User),{
      headers: headers
    })
  }


}
