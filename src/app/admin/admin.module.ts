import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { UserAccessComponent } from './user-access/user-access.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewProductComponent } from './view-product/view-product.component';


@NgModule({
  declarations: [
    UserAccessComponent,
    AddProductComponent,
    DeliveryComponent,
    AdminHomeComponent,
    ViewProductComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AdminModule { }
