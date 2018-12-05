import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component'
import { RecipesComponent } from './recipes/recipes.component'
import { RegisterComponent } from './register/register.component'
import { EquipmentComponent } from './equipment/equipment.component'
import { IngredientsComponent } from './ingredients/ingredients.component'

const routes: Routes = [
  {path: '', redirectTo: '/user', pathMatch: 'full'},
  {path: 'user', component: UsersComponent/*, data: {puppets: [EquipmentComponent,IngredientComponent]}*/},
  {path: 'recipe', component: RecipesComponent },
  {path: 'register', component: RegisterComponent }
];
//User has to load in equipment and ingredient. Recipe needs user ID.

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
