import { Component, OnInit } from '@angular/core';
import { AddProduct } from 'src/app/Services/add-product';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit{
    public product!:AddProduct[];
    public access=false;
    public update!:AddProduct[];
    constructor(public adminservice:AdminService){}

  ngOnInit(){
    this.adminservice.getProduct().subscribe(
      (res:AddProduct[])=>{
        this.product=res;
      }
    )
  }
  id:any;
  show=false;
  edit(data:any){
    console.log(data);
    return this.show=true ,
    this.id=data;
  }

  deleteProduct(data:any){
    this.adminservice.deleteProduct(data).subscribe();
    this.ngOnInit();
  }
}
