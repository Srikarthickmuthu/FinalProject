import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css'],
})
export class DeliveryComponent implements OnInit {
  cart!: any;

  constructor(public userservice: UserService , public adminservice:AdminService , private http:HttpClient) {}

  ngOnInit() {
    this.userservice.getCart().subscribe((res: any) => {
      this.cart = res;
    });
  }
  // update(id:any){
  //   this.http.patch(`http`)
  // }
}
