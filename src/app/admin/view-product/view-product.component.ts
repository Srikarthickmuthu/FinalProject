import { Component, OnChanges } from '@angular/core';
import { AddProduct } from 'src/app/Services/Guard/product';
import { AdminService } from 'src/app/Services/admin.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'],
})
export class ViewProductComponent implements OnChanges {
  public product!: AddProduct[];
  public access = false;
  public update!: AddProduct[];
  constructor(
    public adminservice: AdminService,
    private toastr: ToastrService,
    private dialog: MatDialog,
    private userService: UserService
  ) {
    this.getProducts();
  }

  getProducts() {
    this.adminservice.getProduct().subscribe(
      (res: AddProduct[]) => {
        this.product = res;
      },
      (err: any) => {
        this.toastr.error(`${err.status} Error ${err.name}`);
      }
    );
  }
  ngOnChanges() {
    this.getProducts();
  }
  id: any;
  show = false;

  edit(data: any) {
    this.dialog
      .open(EditProductComponent)
      .afterClosed()
      .subscribe(
        (res) => {
          this.getProducts();
        },
        (err: any) => {
          this.toastr.error(`${err.status} Error ${err.name}`);
        }
      );
    localStorage.setItem('id', data);
    this.userService.addedProduct(data);
    this.id = data;
  }

  deleteProduct(data: any) {
    this.adminservice.deleteProduct(data).subscribe(
      (res) => {
        this.getProducts();
      },
      (err: any) => {
        this.toastr.error(`${err.status} Error ${err.name}`);
      }
    );

    this.toastr.warning('Product deleted..!');
  }
}
