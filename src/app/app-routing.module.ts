import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component'
import { RecipesComponent } from './recipes/recipes.component'
import { RegisterComponent } from './register/register.component'

const routes: Routes = [
  {path: '', redirectTo: '/user', pathMatch: 'full'},
  {path: 'user', component: UsersComponent },
  {path: 'recipe', component: RecipesComponent },
  {path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
