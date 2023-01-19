import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css'],
})
export class DeliveryComponent implements OnInit {
  cart!: any;

  constructor(public userservice: UserService) {}

  ngOnInit() {
    this.userservice.getCart().subscribe((res: any) => {
      this.cart = res;
    });
  }
}
