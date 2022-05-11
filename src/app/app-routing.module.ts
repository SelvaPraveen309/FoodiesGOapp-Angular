import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ListMenusComponent } from './list-menus/list-menus.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewFoodsComponent } from './view-foods/view-foods.component';

const routes: Routes = [
  {
    path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'list-menus',component:ListMenusComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'',redirectTo:'homepage',pathMatch:'full'},
  {path:'view-foods/:search',component:ViewFoodsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
