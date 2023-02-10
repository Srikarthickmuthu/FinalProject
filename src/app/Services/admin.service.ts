import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
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

  getProductEdit(id: any): Observable<any> {
    return this.http.get(`${this.url}/product-details/${id}`);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.url}/product-details/${id}`);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.url}/user-details/${id}`);
  }
  editProduct(id: number, update: AddProduct) {
    return this.http.put(`${this.url}/product-details/${id}`, update);
  }
  addProduct(data: AddProduct) {
    return this.http.post(`${this.url}/product-details`, data);
  }
  updateDelivery(id: number, data: AddProduct) {
    return this.http.put(`${this.url}/cart/${id}`, data);
  }
}