import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../main-components/login/login.component';
import { RegisterComponent } from '../main-components/register/register.component';
import { HomePageComponent } from '../main-components/home-page/home-page.component';
import { RestaurantComponent } from '../main-components/restaurant/restaurant.component';

import { RatersComponent } from '../main-components/raters/raters.component';
import { MenuComponent } from '../main-components/menu/menu.component';
import { MenuitemComponent } from '../main-components/menuitem/menuitem.component';
import { SpecialsComponent } from '../main-components/specials/specials.component';
import { AveragepriceComponent } from '../main-components/averageprice/averageprice.component';
// import {}

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },{
path: 'averageprice'
,component: AveragepriceComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'specials',
    component: SpecialsComponent
  },
  {
      path: 'login',
      component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'restaurant',
    component: RestaurantComponent
  },
  { path:'raters',
  component: RatersComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'foods',
    component: MenuitemComponent
  }
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes),
      CommonModule
  ],
  exports: [
      RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
// export const routingComonents =  [LoginComponent, RegisterComponent];
