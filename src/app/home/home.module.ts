import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { UserHomeComponent } from './user-home/user-home.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { SumPipe } from '../Services/Pipes/sum.pipe';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppModule } from '../app.module';
import { NavbarComponent } from './navbar/navbar.component';
// import { AppComponent } from '../app.component';

@NgModule({
    declarations: [
        UserHomeComponent,
        ViewproductComponent,
        CartComponent,
        SumPipe,
        PagenotfoundComponent,
        NavbarComponent
       
    ],
    imports: [CommonModule, HomeRoutingModule, HttpClientModule],
    exports:[NavbarComponent]
})
export class HomeModule {}
