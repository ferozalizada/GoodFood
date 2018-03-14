import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import {}

const routes: Routes = [
  // {
  //     path: '',
  //     component: ,
  // },
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
