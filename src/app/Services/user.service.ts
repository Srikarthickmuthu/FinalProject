import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AccessService } from './access.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
 
  constructor(private http: HttpClient , 
    private access:AccessService,
    private router :Router) {}

  url = 'http://localhost:3000';

  getUser(){
    return localStorage.getItem("Active-User");
  }

  logout() {
    localStorage.clear();
    return this.access.active = false,
    this.router.navigate(['home-path/user-home-path'])
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
  getSingle(data:any){
    return this.http.get(`${this.url}/cart/${data}`)
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
