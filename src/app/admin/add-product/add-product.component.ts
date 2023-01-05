import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddProductService } from 'src/app/Services/add-product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor(public addProductService:AddProductService){}

  onSubmit(addProduct:NgForm ){


    console.log(addProduct.value);

    this.addProductService.addProduct(addProduct.value).subscribe();

    addProduct.resetForm();
  
  }
}
