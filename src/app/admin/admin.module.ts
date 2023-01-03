import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserAccessComponent } from './user-access/user-access.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { AppRoutingModule } from '../app-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';


@NgModule({
  declarations: [
    UserAccessComponent,
    AddProductComponent,
    DeliveryComponent,
    AdminHomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AppRoutingModule
  ]
})
export class AdminModule { }
