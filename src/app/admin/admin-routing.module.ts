import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { UserAccessComponent } from './user-access/user-access.component';

const routes: Routes = [
  {path:'admin-home-path',component:AdminHomeComponent,
  children:[
    {path:'add-product-path',component:AddProductComponent},
    {path:'delivery-path',component:DeliveryComponent},
    {path:'user-access-path',component:UserAccessComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
