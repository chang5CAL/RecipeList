import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { RecipesComponent } from './recipes/recipes.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RegisterComponent } from './register/register.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { EquipmentComponent } from './equipment/equipment.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    RecipesComponent,
    UserDetailComponent,
    RecipeDetailComponent,
    RegisterComponent,
    IngredientsComponent,
    EquipmentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
