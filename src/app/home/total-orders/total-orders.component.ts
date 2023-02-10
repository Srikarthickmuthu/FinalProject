import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AddProduct, errorMessage } from 'src/app/Services/Guard/product';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-total-orders',
  templateUrl: './total-orders.component.html',
  styleUrls: ['./total-orders.component.css'],
})
export class TotalOrdersComponent {
  cart: any=[];
  user: any;
  deliveryStatus = 'Delivered';
  show = true;
  showCart = false;
  lengthValue = 0;

  constructor(public userservice: UserService, private toastr: ToastrService) {
    this.user = localStorage.getItem('Active-User');
  }

  ngOnInit() {
    this.getCart();
  }

  getCart() {
    this.userservice.getCart().subscribe(
      (res: any) => {
        this.cart = res.filter(
          (el: { userId: string; deliveryStatus: string }) => {
             el.userId == this.user && el.deliveryStatus == 'Delivered';
          }
        );
        this.lengthValue = this.cart.length;
      },
      (err: errorMessage) => {
        this.toastr.error(`${err.status} Error ${err.name}`);
      }
    );
  }
}