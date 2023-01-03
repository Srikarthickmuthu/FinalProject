import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'home',loadChildren:()=>import("./home/home.module").then(m=>m.HomeModule)},
  {path:'loginSignUp',loadChildren:()=>import('./login/login.module').then(m=>m.LoginModule)},
  {path:'cart',loadChildren:()=>import('./cart/cart.module').then(m=>m.CartModule)},
  {path:'admin',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
  {path:'',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
