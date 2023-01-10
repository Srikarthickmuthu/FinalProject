import { Component, OnInit } from '@angular/core';
import { AddProduct } from 'src/app/Services/add-product';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  public product!:AddProduct[];
total: any;

  constructor(public adminservice:AdminService){}

  ngOnInit(){
    this.adminservice.getProduct().subscribe(
      (res:AddProduct[])=>{
        this.product=res;
      }
    )
  }
  gramWeight=[
    {"gram":50},
    {"gram":100},
    {"gram":250},
    {"gram":500}
  ]


  // onSubmit(cartForm:NgForm){
  //   this.
  // }


}
