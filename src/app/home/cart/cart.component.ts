import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AddProduct } from 'src/app/Services/Guard/product';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: any = [];
  a!: AddProduct;

  constructor(public userservice: UserService, private toastr: ToastrService) {}

  user = localStorage.getItem('Active-User');
  show = true;
  showCart = false;
  lengthValue = 0;
  ngOnInit() {
    this.getCart();
  }
  getCart() {
    this.userservice.getCart().subscribe((res: any) => {
      this.cart = res.filter(
        (el: { userId: string; deliveryStatus: String }) => {
          return el.userId == this.user && el.deliveryStatus == 'Ordered';
        }
      );
      this.lengthValue = this.cart.length;
      if (length !== 0) {
        this.show = false;
        this.showCart = true;
      }
    });
  }
  delete(data: any) {
    this.userservice.delete(data).subscribe(() => {
      this.getCart();
    });

    this.toastr.warning('Product removed ..!');
  }
}
