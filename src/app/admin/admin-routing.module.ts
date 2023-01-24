import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewProductComponent } from './view-product/view-product.component';
import { AddProductComponent } from './add-product/add-product.component';

import { DeliveryComponent } from './delivery/delivery.component';
import { UserAccessComponent } from './user-access/user-access.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { SellingDetailsComponent } from './selling-details/selling-details.component';
import { AccessGuard } from '../Services/Guard/access.guard';

const routes: Routes = [
  { path: 'add-product-path', component: AddProductComponent , canActivate: [AccessGuard] },
  { path: 'delivery-path', component: DeliveryComponent  , canActivate: [AccessGuard]},
  { path: 'user-access-path', component: UserAccessComponent  , canActivate: [AccessGuard]},
  { path: 'view-product-path', component: ViewProductComponent , canActivate: [AccessGuard]},
  { path: 'edit-product-path', component: EditProductComponent , canActivate: [AccessGuard] },
  {path:'selling-details-path',component:SellingDetailsComponent , canActivate: [AccessGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
