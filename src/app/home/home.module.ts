import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { UserHomeComponent } from './user-home/user-home.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';


@NgModule({
  declarations: [
    UserHomeComponent,
    ViewproductComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
