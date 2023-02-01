import { Component, OnInit } from '@angular/core';
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
export class ViewproductComponent implements OnInit {
  public product!: AddProduct[];
  public product1!: AddProduct[];
  constructor(
    public adminservice: AdminService,
    public userservice: UserService,
    private toastr: ToastrService,
    private router:Router
  ) {}

  ngOnInit() {
    this.adminservice.getProduct().subscribe(
      (res: AddProduct[]) => {
        this.product = res;
      },
      (err :errorMessage) => {
        this.toastr.error(`${err.status} Error ${err.name}`);
      }
    );
  }

  user = localStorage.getItem('Active-User');

  cart(data: any) {
    if(this.user!=null){
    data.userId = this.user;
    data.deliveryStatus = 'Ordered';
    this.userservice.addProduct(data).subscribe(
      () => {
        this.toastr.success('Product added to the cart..!');
      },
      (err : errorMessage) => {
        this.toastr.error(`${err.status} Error ${err.name}`);
      }   
    );
    delete data.id;
  }
  else{
    this.toastr.warning("Please login before continue..!");
    setTimeout(()=>{
      this.router.navigate(['/loginSignUp-path/login-path'])
    },1000);
  }
}

}
