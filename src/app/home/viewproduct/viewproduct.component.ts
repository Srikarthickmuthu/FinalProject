import { Component, OnInit } from '@angular/core';
import { AddProduct } from 'src/app/Services/product';
import { AdminService } from 'src/app/Services/admin.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  public product!:AddProduct[];
  public product1!:AddProduct[];
  constructor(public adminservice:AdminService , public userservice:UserService){}

  value=0;
  ngOnInit(){
    this.adminservice.getProduct().subscribe(
      (res:AddProduct[])=>{
        this.product=res;
      }
    )
  }
myClass="button";

  cart(data:any){

    this.myClass="clicked";

    this.userservice.addProduct(data).subscribe();
    
  }
}