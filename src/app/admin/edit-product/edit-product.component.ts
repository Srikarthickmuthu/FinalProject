import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddProduct } from 'src/app/Services/Guard/product';
import { AdminService } from 'src/app/Services/admin.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Services/user.service';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  public product!: AddProduct;
  id: any;

  constructor(
    private adminService: AdminService,
    private toastr: ToastrService,
    private userService: UserService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.id = localStorage.getItem('id');

    this.adminService.getProductEdit(this.id).subscribe(
      (res: AddProduct) => {
        this.product = res;
      },
      (err: any) => {
        this.toastr.error(`${err.status} Error ${err.name}`);
      }
    );
  }

  onSubmit(editProduct: NgForm) {
    const data = editProduct.value.id;

    this.product = editProduct.value;

    this.adminService.editProduct(data, this.product).subscribe(
      (res) => {
        this.toastr.success('Product details edited successfully..!');
      },
      (err) => {
        this.toastr.error(`${err.status} Error ${err.name}`);
      }
    );

    editProduct.resetForm();

    this.dialog.closeAll();
  }
}
