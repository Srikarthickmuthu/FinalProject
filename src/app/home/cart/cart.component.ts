import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AddProduct} from 'src/app/Services/Guard/product';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart!: AddProduct[];
  constructor(public userservice: UserService, private toastr: ToastrService) {}
  user = localStorage.getItem('Active-User');
  show = true;
  showCart = false;
  itemsLength=0;
  ngOnInit(): void {
    this.getCart();
  }
  
  getCart(): void {
    this.userservice.getCart().subscribe((res: any) => {
      this.cart = res.filter((element: { userId: string }) => {
        return element.userId == this.user,
        this.itemsLength=this.cart.length;
      });
    });
    

  }
  delete(data: any) {
    this.userservice.delete(data).subscribe();
    this.getCart();
    this.toastr.warning('Product removed..!');
  }
}
