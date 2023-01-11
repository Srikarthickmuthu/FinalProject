import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewProductComponent } from './view-product/view-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { UserAccessComponent } from './user-access/user-access.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { canActivate } from '../Services/gaurds';

const routes: Routes = [
  {path:'admin-home-path',component:AdminHomeComponent,
  children:[
    {path:'add-product-path',component:AddProductComponent ,canActivate:[canActivate]},
    {path:'delivery-path',component:DeliveryComponent ,canActivate:[canActivate]},
    {path:'user-access-path',component:UserAccessComponent,canActivate:[canActivate]},
    {path:'view-product-path',component:ViewProductComponent ,canActivate:[canActivate]},
    {path:'edit-product-path',component:EditProductComponent ,canActivate:[canActivate]}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
