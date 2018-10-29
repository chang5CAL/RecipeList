import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  User: User = {
  id: 1,
  username: "Justin",
  password: "password"
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

  constructor() {}

  ngOnInit() {}

  public setTitle(){
    this.titleService.setTitle( "User Panel" );
  }


}
