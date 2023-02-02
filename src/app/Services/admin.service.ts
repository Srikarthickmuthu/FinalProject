import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { AddProduct } from './Guard/product';
@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:3000';

  getUser(): Observable<any> {
    return this.http.get(`${this.url}/user-details`);
  }

  getProduct(): Observable<any> {
    return this.http.get(`${this.url}/product-details`);
  }
  getProductEdit(data: any): Observable<any> {
    return this.http.get(`${this.url}/product-details/${data}`);
  }
  deleteProduct(data: Number) : Observable<any>{
    return this.http.delete(`${this.url}/product-details/${data}`);
  }
  deleteUser(data: Number) : Observable<any>{
    return this.http.delete(`${this.url}/user-details/${data}`);
  }
  editProduct(data: Number, update: AddProduct) : Observable<any>{
    return this.http.put(`${this.url}/product-details/${data}`, update);
  }
  addProduct(data: AddProduct) : Observable<any>{
    return this.http.post(`${this.url}/product-details`, data);
  }
  updateDelivery(id: Number,data: AddProduct) : Observable<any>{
    return this.http.put(`${this.url}/cart/${id}`, data);
  }
}
