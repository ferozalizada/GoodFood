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
import { UpdatedataComponent } from '../main-components/updatedata/updatedata.component';
import { CollectionComponent } from '../main-components/collection/collection.component';
// import {}

const routes: Routes = [

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'adminstrator',
    component: UpdatedataComponent
  },
  {
    path: 'averageprice'
    ,component: AveragepriceComponent
  },
  {
    path: 'home',
    component: HomePageComponent,
    
  },{
    path: 'restaurant',
    children:[
      {
        path: ':restaurantid',
        component: RestaurantComponent
        // children:[
        //   {
        //     path: 'menu',
        //     component: MenuComponent
        //   }
        // ]
      }
    ]
  },
  {
    path: 'collection',
    component: CollectionComponent
  },
  {
    path: 'menu',
    component: MenuComponent
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
  
  { path:'raters',
  component: RatersComponent
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
