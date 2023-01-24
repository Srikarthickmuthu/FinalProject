import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/Services/admin.service';
import { AddProduct } from 'src/app/Services/Guard/product';
import { UserService } from 'src/app/Services/user.service';
import { TallyComponent } from '../tally/tally.component';

@Component({
  selector: 'app-selling-details',
  templateUrl: './selling-details.component.html',
  styleUrls: ['./selling-details.component.css'],
})
export class SellingDetailsComponent {
  cart!: any;
  cart1!:any;
  update!: AddProduct;
  constructor(
    public userservice: UserService,
    public adminservice: AdminService,
    private dialog:MatDialog
  ) {}
  value = 'Delivered';
  ngOnInit() {
    this.adminservice.getProduct().subscribe((res: any) => {
      return (this.cart = res);
    });
  }
  Quantity:any;
  total(data: any , id:any) {
    this.userservice.getCart().subscribe((res: any) => {
      this.cart1 = res.filter((el:{deliveryStatus:String;productName:String})=>{
        return el.deliveryStatus==this.value && el.productName==data 
      });
      this.Quantity=this.cart1.length;
    });

    if(this.Quantity!=null){
    sessionStorage.setItem("quantity",this.Quantity);}
    else{
      sessionStorage.setItem("quantity","1")
    }
    sessionStorage.setItem("productName",data)
    sessionStorage.setItem("productPrice",id)
    this.dialog.open(TallyComponent).afterClosed().subscribe((res)=>{this.clear()});
  }
  clear(){
    sessionStorage.clear();
  }
}
