import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent {

  constructor(public adminservice:AdminService){}

  onSubmit(addProduct:NgForm ){

    this.adminservice.addProduct(addProduct.value).subscribe();

    addProduct.resetForm();
  
  }
}

