import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AddProductComponent } from 'src/app/admin/add-product/add-product.component';
import { AddProduct, errorMessage } from 'src/app/Services/Guard/product';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public cart: any;
  public product: any=[];
  public product1: any;
  user = localStorage.getItem('Active-User');
  quantity = 0;
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
        // this.cart.map((element:any)=>{
        //   console.log(element)
        // });
        
      },
      (err: errorMessage) => {
        this.toastr.error(`${err.status} Error ${err.name}`);
      },
      
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
  duplicateItem(data: any) {
    const a = this.cart.filter((el: any) => {
      return el.productName == data.productName;
    });
    data.quantity = a.length;
    const id = data.id;
    this.userservice.updateDelivery(id, data).subscribe(
      () => {
        this.getCart();
      },
      (err: errorMessage) => {
        this.toastr.error(`${err.status} Error ${err.name}`);
      }
    );
  }
  increment(data: any, id: number) {
    if (data.quantity >= 5) {
      this.toastr.info('You can add upto 5 units only !');
      data.quantity = 5;
    } else if (data.quantity >= 1) {
      data.quantity++;
      data.total = data.productPrice * data.quantity;
      this.userservice.updateDelivery(id, data).subscribe(
        () => {
          this.getCart();
        },
        (err: errorMessage) => {
          this.toastr.error(`${err.status} Error ${err.name}`);
        }
      );
    }
  }
  decrement(data: any, id: number) {
    if (data.quantity > 1) {
      data.quantity--;
      data.total = data.productPrice * data.quantity;
      this.userservice.updateDelivery(id, data).subscribe(
        () => {
          this.getCart();
        },
        (err: errorMessage) => {
          this.toastr.error(`${err.status} Error ${err.name}`);
        }
      );
    } else if ((data.quantity = 1)) {
      this.delete(data.id);
    }
  }
}
