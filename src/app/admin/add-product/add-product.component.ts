import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';
import { ToastrService } from 'ngx-toastr';

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
    this.adminservice.addProduct(addProduct.value).subscribe();

    addProduct.resetForm();

    this.toastr.success('New product added..!');
  }
}
