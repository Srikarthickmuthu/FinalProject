import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';
import { ToastrService } from 'ngx-toastr';
import { errorMessage } from 'src/app/Services/Guard/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  constructor(
    public adminservice: AdminService,
    private toastr: ToastrService
  ) {}

  onSubmit(addProduct: NgForm): void {
    this.adminservice.addProduct(addProduct.value).subscribe(
      () => {
        this.toastr.success('New product added..!');
      },
      (err :errorMessage) => {
        this.toastr.error(`${err.status} Error ${err.name}`);
      }
    );

    addProduct.resetForm();
  }
}
