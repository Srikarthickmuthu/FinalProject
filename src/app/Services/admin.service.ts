import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { UserData } from './Guard/sign-up';
import { AddProduct } from './Guard/product';
@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:3000';

  getUser(): Observable<any> {
    return this.http.get(`${this.url}/user-details`).pipe(
      map((res) => {
        return res;
      })
    ); 
  }

  getProduct(): Observable<any> {
    return this.http.get(`${this.url}/product-details`).pipe(
      map((res) => {
        return res;
      })
    );
  }
  getProductEdit(data: any): Observable<any> {
    return this.http.get(`${this.url}/product-details/${data}`).pipe(
      map((res) => {
        return res;
      })
    );
  }
  deleteProduct(data: Number) {
    return this.http.delete(`${this.url}/product-details/${data}`);
  }
  deleteUser(data: Number) {
    return this.http.delete(`${this.url}/user-details/${data}`);
  }
  editProduct(data: Number, update: AddProduct) {
    return this.http.put(`${this.url}/product-details/${data}`, update);
  }
  addProduct(data: AddProduct) {
    return this.http.post(`${this.url}/product-details`, data);
  }
  updateDelivery(id: Number,data: AddProduct) {
    return this.http.put(`${this.url}/cart/${id}`, data);
  }
}
