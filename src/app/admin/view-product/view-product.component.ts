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
     constructor(public addminservice:AdminService){}

  ngOnInit(){
    this.addminservice.getProduct().subscribe(
      (res:AddProduct[])=>{
        this.product=res;
      }
    )
  }
}
