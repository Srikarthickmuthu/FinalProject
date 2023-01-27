import { Component, OnInit } from '@angular/core';
import { AddProduct } from 'src/app/Services/Guard/product';
import { AdminService } from 'src/app/Services/admin.service';
import { UserService } from 'src/app/Services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css'],
})
export class ViewproductComponent implements OnInit {
  public product!: AddProduct[];
  public product1!: AddProduct[];
  constructor(
    public adminservice: AdminService,
    public userservice: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.adminservice.getProduct().subscribe(
      (res: AddProduct[]) => {
        this.product = res;
      },
      (err: any) => {
        this.toastr.error(`${err.status} Error ${err.name}`);
      }
    );
  }

  user = localStorage.getItem('Active-User');

  cart(data: any) {
    data.userId = this.user;
    data.deliveryStatus = 'Ordered';
    this.userservice.addProduct(data).subscribe(
      (res: any) => {
        this.toastr.success('Product added to the cart..!');
      },
      (err: any) => {
        this.toastr.error(`${err.status} Error ${err.name}`);
      }
    );
    delete data.id;
  }
}
