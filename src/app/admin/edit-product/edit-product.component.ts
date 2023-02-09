import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddProduct, errorMessage } from 'src/app/Services/Guard/product';
import { AdminService } from 'src/app/Services/admin.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  public product!: AddProduct;

  constructor(
    private adminService: AdminService,
    private toastr: ToastrService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    const id = localStorage.getItem('id');

    this.adminService.getProductEdit(id).subscribe(
      (res: AddProduct) => {
        this.product = res;
      },
      (err: errorMessage) => {
        this.toastr.error(`${err.status} Error ${err.name}`);
      }
    );
  }

  onSubmit(editProduct: NgForm) {
    const data = editProduct.value.id;

    this.product = editProduct.value;

    this.adminService.editProduct(data, this.product).subscribe(
      () => {
        this.toastr.success('Product details edited successfully..!');
        this.dialog.closeAll();
      },
      (err: errorMessage) => {
        this.toastr.error(`${err.status} Error ${err.name}`);
      }
    );
    return editProduct.resetForm();
  }
}
