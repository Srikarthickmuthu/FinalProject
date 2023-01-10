import { Component, Input } from '@angular/core';
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
  public productEdit!:AddProduct[];
  public update!:AddProduct[];

  constructor(private adminService:AdminService){

  }

  @Input('id')id="";
  
  ngOnInit(){
    this.adminService.getProductEdit(this.id).subscribe(
      (res:AddProduct[])=>{
        this.productEdit=res;
        console.log(this.productEdit)
      }
    )
  }
 
  onSubmit(editProduct:NgForm){

    const data=editProduct.value.id;
    
    this.update=editProduct.value;

    this.adminService.editProduct(data,this.update).subscribe();

    editProduct.resetForm();

  }


}
