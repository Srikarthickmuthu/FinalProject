import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AddProduct, errorMessage } from 'src/app/Services/Guard/product';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: any = [];
  a!: AddProduct;
  user = localStorage.getItem('Active-User');
  show = true;
  showCart = false;
  lengthValue = 0;
  showRemove = true;

  constructor(public userservice: UserService, private toastr: ToastrService) {}

  ngOnInit() {
    this.getCart();
  }

  getCart() {
    this.userservice.getCart().subscribe(
      (res: any) => {
        this.cart = res.filter(
          (el: { userId: string; deliveryStatus: string }) => {
            return el.userId == this.user && el.deliveryStatus == 'Ordered';
          }
        );
        this.lengthValue = this.cart.length;
        this.show = this.lengthValue === 0;
        this.showCart = !this.show;
      },
      (err: errorMessage) => {
        this.toastr.error(`${err.status} Error ${err.name}`);
      }
    );
  }

  delete(data: number) {
    this.userservice.delete(data).subscribe(
      () => {
        this.getCart();
        this.toastr.warning('Product removed ..!');
      },
      (err: errorMessage) => {
        this.toastr.error(`${err.status} Error ${err.name}`);
      }
    );
  }

  ordered() {
    this.showRemove = false;
    this.ngOnInit();
  }
}
