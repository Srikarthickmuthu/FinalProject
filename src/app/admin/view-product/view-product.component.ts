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
    ho= 'any';
     constructor(public adminservice:AdminService){}

  ngOnInit(){
    this.adminservice.getProduct().subscribe(
      (res:AddProduct[])=>{
        this.product=res;
      }
    )
  }

  editProduct(data:any,data1:any){
    this.update=data1;
    this.adminservice.editProduct(data,this.update).subscribe();
    
  }

  deleteProduct(data:any){
    this.adminservice.deleteProduct(data).subscribe();
    this.ngOnInit();
  }
}
