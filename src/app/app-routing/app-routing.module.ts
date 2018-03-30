import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../main-components/login/login.component';
import { RegisterComponent } from '../main-components/register/register.component';
import { HomePageComponent } from '../main-components/home-page/home-page.component';
// import {}

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
      path: 'login',
      component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
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
