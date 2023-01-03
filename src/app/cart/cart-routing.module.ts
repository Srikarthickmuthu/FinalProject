import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderedItemsComponent } from './ordered-items/ordered-items.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path:'ordered-items-path',component:OrderedItemsComponent},
  {path:'product-list-path',component:ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
