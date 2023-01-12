import { Component, OnChanges } from '@angular/core';
import { AddProduct } from 'src/app/Services/product';
import { AdminService } from 'src/app/Services/admin.service';
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnChanges{
    public product!:AddProduct[];
    public access=false;
    public update!:AddProduct[];
    constructor(public adminservice:AdminService){
      this.ngOnChanges();
    }
    
  ngOnChanges(){
    this.adminservice.getProduct().subscribe(
      (res:AddProduct[])=>{
        this.product=res;
      }
    )
  }

  id:any;
  show=false;

  edit(data:any){

    return this.show=true,
    this.id=data;

  }

  deleteProduct(data:any){
    this.adminservice.deleteProduct(data).subscribe();
    this.ngOnChanges();
  }
}
