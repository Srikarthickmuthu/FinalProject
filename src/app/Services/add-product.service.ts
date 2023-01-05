import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  constructor(private http :HttpClient) { }
  url="http://localhost:3000";

  addProduct(data:any){
    return this.http.post(`${this.url}/product-details`,data);
  }
}
