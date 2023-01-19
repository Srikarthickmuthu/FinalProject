import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnChanges {
  cart!: any;

  constructor(public userservice: UserService, private toastr: ToastrService) {}

  user = localStorage.getItem('Active-User');
  show = true;
  showCart = false;
  ngOnInit() {
    this.userservice.getCart().subscribe((res: any) => {
      this.cart = res;
      length = this.cart.length;
      if (length !== 0) {
        this.show = false;
        this.showCart = true;
      }
    });
  }
  ngOnChanges() {}

  delete(data: any) {
    this.userservice.delete(data).subscribe();
    this.ngOnInit();
    this.toastr.warning('Product removed ..!');
  }
}
