import { Component, OnChanges, OnInit} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AddProduct } from 'src/app/Services/Guard/product';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart!: any;
  a!:AddProduct;

  constructor(public userservice: UserService, private toastr: ToastrService) {}

  user = localStorage.getItem('Active-User');
  show = true;
  showCart = false;
  length=0;
  ngOnInit() {
    this.userservice.getCart().subscribe((res: any) => {
      this.cart = res.filter((el: { userId: string; })=>{
        return el.userId==this.user;});
      this.length = this.cart.length;
      if (length !== 0) {
        this.show = false;
        this.showCart = true;
      }
      
    });
  }


  delete(data: any) {
    this.userservice.delete(data).subscribe();
    this.ngOnInit();
    this.toastr.warning('Product removed ..!');
  }
}
