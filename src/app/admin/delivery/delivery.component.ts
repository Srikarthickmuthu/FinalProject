import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/Services/admin.service';
import { AddProduct, response } from 'src/app/Services/Guard/product';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css'],
})
export class DeliveryComponent implements OnInit {
  public cart!: AddProduct[];
  public update!: AddProduct;
  constructor(
    public userservice: UserService,
    public adminservice: AdminService,
    private toastr: ToastrService
  ) {}
  value = 'Ordered';
  ngOnInit() {
    this.userservice.getCart().subscribe((res: any) => {
      this.cart = res.filter((el: { deliveryStatus: String }) => {
        return el.deliveryStatus == this.value;
      });
    });
  }
  delivered(dataUser: Number) {
    this.userservice.getSingle(dataUser).subscribe((res: any) => {
      this.update = res;
      this.update.deliveryStatus = 'Delivered';
      this.ngOnInit();
      this.adminservice.updateDelivery(dataUser, this.update).subscribe(() => {
        (_error: any) => {
          this.toastr.warning('Failed to fetch the resources');
        };
      });
      this.toastr.success('Status updated successfully');

      (_error: any) => {
        this.toastr.warning('Failed to fetch the resources');
      };
    });
  }
}
