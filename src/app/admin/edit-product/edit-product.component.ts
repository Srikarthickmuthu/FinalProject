import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddProduct } from 'src/app/Services/add-product';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  public product!:AddProduct[];
  public update!:AddProduct[];

  constructor(private adminService:AdminService){}

  ngOnInit(){
    this.adminService.getProduct().subscribe(
      (res:AddProduct[])=>{
        this.product=res;
      }
    )
  }

  onSubmit(editProduct:NgForm){

    const data=editProduct.value.id;
    
    this.update=editProduct.value;

    this.adminService.editProduct(data,this.update).subscribe();
  }


}
