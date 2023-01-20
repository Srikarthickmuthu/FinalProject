import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { UserAccessComponent } from './user-access/user-access.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DeliveryComponent } from './delivery/delivery.component';

import { HttpClientModule } from '@angular/common/http';
import { ViewProductComponent } from './view-product/view-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    UserAccessComponent,
    AddProductComponent,
    DeliveryComponent,
    ViewProductComponent,
    EditProductComponent,
  ],
  entryComponents: [EditProductComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
  ],
})
export class AdminModule {}
