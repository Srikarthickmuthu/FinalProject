import { Component, Input, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddProduct, Default } from 'src/app/Services/product';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  id1=1;
  public product!: AddProduct[];

  constructor(private adminService: AdminService) { }

  @Input('id') id = "";

  ngOnInit() {
    this.adminService.getProductEdit(this.id).subscribe(
      (res: AddProduct[]) => {
        this.product = res;
        console.log(this.product);
      })
  }


  
  a = new Default(1,"hjj","mjjn",3654,"ytrde");

  onSubmit(editProduct: NgForm) {

    const data = editProduct.value.id;
    
    this.product = editProduct.value;

    this.adminService.editProduct(data, this.product).subscribe();

    editProduct.resetForm();

  }
}

