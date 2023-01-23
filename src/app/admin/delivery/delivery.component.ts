import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { AddProduct } from 'src/app/Services/Guard/product';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css'],
})
export class DeliveryComponent implements OnInit {
  cart!: any;
  update!: AddProduct;
  constructor(
    public userservice: UserService,
    public adminservice: AdminService,
  ) {}
value="Ordered"
  ngOnInit() {
    this.userservice.getCart().subscribe((res: any) => {
      this.cart = res.filter((el:{deliveryStatus:String})=>{
        return el.deliveryStatus==this.value;
      });
    });
  }
  delivered(dataUser: any) {
    this.userservice.getSingle(dataUser).subscribe((res: any) => {
      this.update = res;
      this.update.deliveryStatus = 'Delivered';
      this.ngOnInit();
      this.adminservice.updateDelivery(dataUser, this.update).subscribe();
    });
   
  }
}
