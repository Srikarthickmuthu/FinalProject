import { Component, OnDestroy, OnInit } from '@angular/core';
import { AddProduct, errorMessage } from 'src/app/Services/Guard/product';
import { AdminService } from 'src/app/Services/admin.service';
import { UserService } from 'src/app/Services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css'],
})
export class ViewproductComponent implements OnInit, OnDestroy {
  public product!: AddProduct[];
  public product1: any;
  public cart1!: AddProduct[];
  public id: any = [];
  public idValue: any;
  constructor(
    public adminservice: AdminService,
    public userservice: UserService,
    private toastr: ToastrService,
    private router: Router
  ) {}
  ngOnDestroy() {
    // console.log(this.id);
    localStorage.setItem('id', this.id);
  }
  ngOnInit() {
    this.adminservice.getProduct().subscribe(
      (res: AddProduct[]) => {
        this.product = res;
      },
      (err: errorMessage) => {
        this.toastr.error(`${err.status} Error ${err.name}`);
      }
    );
    this.getCart();
  }
  user = localStorage.getItem('Active-User');

  cart(data: any) {
    if (this.user != null) {
      this.id.push(data.id);
      setTimeout(() => {
        data.userId = this.user;
        data.deliveryStatus = 'Ordered';
        data.quantity = 1;
        data.total = data.productPrice;
        this.userservice.addProduct(data).subscribe(
          () => {
            this.toastr.success('Product added to the cart..!');
            data.show = false;
          },
          (err: errorMessage) => {
            this.toastr.error(`${err.status} Error ${err.name}`);
          }
        );
      }, 1000);
      delete data.id;
    } else {
      this.toastr.warning('Please login before continue..!');
      setTimeout(() => {
        this.router.navigate(['/loginSignUp-path/login-path']);
      }, 1000);
    }
  }

  getCart() {
    this.idValue = localStorage.getItem('id');
    console.log(this.idValue)
    const id=this.idValue.split(',').map((item:any)=>{
      return parseInt(item)
    })
    console.log(id)
    id.map((element:any)=>{
      this.userservice.getSingleProduct(element).subscribe((res:any)=>{
        res.show=false;
        this.cart1=res;
        console.log(this.cart1);
      })
    })
  }
}
