import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
 
  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000';

  logout() {
    localStorage.clear();
  }

  addUser(data: any) {
    return this.http.post(`${this.url}/user-details`, data);
  }

  addProduct(data: any) {
    return this.http.post(`${this.url}/cart`, data);
  }
  getCart() {
    return this.http.get(`${this.url}/cart`);
  }
  delete(data: any) {
    return this.http.delete(`${this.url}/cart/${data}`);
  }
  addedProduct(data:any){
    const value=data;
    console.log(value);
    return value;
  }
}
