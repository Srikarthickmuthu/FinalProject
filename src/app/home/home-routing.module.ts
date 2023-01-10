import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';

const routes: Routes = [
  {path:'user-home-path',component:UserHomeComponent},
  {path:'view-home-path',component:ViewproductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
