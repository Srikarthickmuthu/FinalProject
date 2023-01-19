import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewProductComponent } from './view-product/view-product.component';
import { AddProductComponent } from './add-product/add-product.component';

import { DeliveryComponent } from './delivery/delivery.component';
import { UserAccessComponent } from './user-access/user-access.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes = [
  { path: 'add-product-path', component: AddProductComponent },
  { path: 'delivery-path', component: DeliveryComponent },
  { path: 'user-access-path', component: UserAccessComponent },
  { path: 'view-product-path', component: ViewProductComponent },
  { path: 'edit-product-path', component: EditProductComponent },
  { path: '', component: DeliveryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
