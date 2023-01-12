
import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/Services/cart';
import { AddProduct } from 'src/app/Services/product';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cart!: any;

  constructor(public userservice:UserService){}

  ngOnInit(){
    this.userservice.getCart().subscribe((res:any)=>{
      this.cart=res;
      console.log(this.cart)
    })
  }

  delete(data:any){
    this.userservice.delete(data).subscribe();
    this.ngOnInit();
  }

}
