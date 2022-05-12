import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ListMenusComponent } from './list-menus/list-menus.component';
import { FormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule}from'@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';
import { ViewFoodsComponent } from './view-foods/view-foods.component';
import { AdminRoleComponent } from './admin-role/admin-role.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,
    ListMenusComponent,
    
    HomepageComponent,
         ViewFoodsComponent,
         AdminRoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
