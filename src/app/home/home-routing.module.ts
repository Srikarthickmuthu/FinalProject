import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate } from '../Services/gaurds';
import { CartComponent } from './cart/cart.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';

const routes: Routes = [
  {path:'user-home-path',component:UserHomeComponent},
  {path:'user-cart-path',component:CartComponent,canActivate:[canActivate]},
  {path:'view-home-path',component:ViewproductComponent,canActivate:[canActivate]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
