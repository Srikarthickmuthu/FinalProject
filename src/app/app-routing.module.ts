import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home-path',loadChildren:()=>import("./home/home.module").then(m=>m.HomeModule)},
  {path:'loginSignUp-path',loadChildren:()=>import('./login/login.module').then(m=>m.LoginModule)},
  {path:'admin-path',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
  {path:'',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
