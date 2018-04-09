// IMports the modules needed to run the routing
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Imports all the componenets that are to be injected
import { AppComponent } from './app.component';
import { NavbarComponent } from './main-components/navbar/navbar.component';
import { LoginComponent } from './main-components/login/login.component';
import { RegisterComponent } from './main-components/register/register.component';
import { HomePageComponent } from './main-components/home-page/home-page.component';
import { MenuComponent } from './main-components/menu/menu.component';

//Imports the app router to navigate through pages
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpModule } from '@angular/http';

//Imports the Services that will fetch and push data
import { FetchDataService } from './services/fetch-data.service';
import { PostDataService } from './services/post-data.service';
import { CommonModule } from '@angular/common';
// import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { MenuitemComponent } from './main-components/menuitem/menuitem.component';
import { RestaurantComponent } from './main-components/restaurant/restaurant.component';
import { RatersComponent } from './main-components/raters/raters.component';
import { DatapointService } from './services/datapoint.service';
// import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomePageComponent,
    MenuComponent,
    MenuitemComponent,
    RestaurantComponent,
    RatersComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    // HttpClient,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    FetchDataService,
    PostDataService,
    DatapointService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
