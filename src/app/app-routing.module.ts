import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'about-path',component:AboutComponent},
  {path:'contact-path',component:ContactComponent},
  {path:'home-path',loadChildren:()=>import("./home/home.module").then(m=>m.HomeModule)},
  {path:'loginSignUp-path',loadChildren:()=>import('./login/login.module').then(m=>m.LoginModule)},
  {path:'cart-path',loadChildren:()=>import('./cart/cart.module').then(m=>m.CartModule)},
  {path:'admin-path',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
  {path:'',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
