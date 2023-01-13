import { Component,Input, OnChanges} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddProduct, Default } from 'src/app/Services/product';
import { AdminService } from 'src/app/Services/admin.service';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnChanges{

  public product!: AddProduct;

  constructor(private adminService: AdminService) { }

  @Input('id') id = "";

  ngOnChanges(){
    this.data();
  }

  data() {
    this.adminService.getProductEdit(this.id).subscribe(
      (res: AddProduct) => {
        this.product = res;
        console.log("The value of products",this.product);
      })
  }

  onSubmit(editProduct: NgForm) {

    const data = editProduct.value.id;
    
    this.product = editProduct.value;

    this.adminService.editProduct(data, this.product).subscribe();

    editProduct.resetForm();

  }
}

