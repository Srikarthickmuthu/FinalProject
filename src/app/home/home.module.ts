import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { UserHomeComponent } from './user-home/user-home.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { SumPipe } from './cart/sum.pipe';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    UserHomeComponent,
    ViewproductComponent,
    CartComponent,
    SumPipe,
    PagenotfoundComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, HttpClientModule],
})
export class HomeModule {}
