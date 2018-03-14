// IMports the modules needed to run the routing
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Imports all the componenets that are to be injected
import { AppComponent } from './app.component';
import { NavbarComponent } from './main-components/navbar/navbar.component';
import { LoginComponent } from './main-components/login/login.component';
import { RegisterComponent } from './main-components/register/register.component';
import { HomePageComponent } from './main-components/home-page/home-page.component';
import { MenuComponent } from './main-components/menu/menu.component';

//Imports the app router to navigate through pages
import { AppRoutingModule } from './app-routing/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomePageComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
