import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { OrderedItemsComponent } from './ordered-items/ordered-items.component';


@NgModule({
  declarations: [
    ProductListComponent,
    OrderedItemsComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
