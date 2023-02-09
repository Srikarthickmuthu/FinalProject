import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from './Guard/sign-up';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) {}

  url = 'http://localhost:3000';

  getUser() {
    return localStorage.getItem('Active-User');
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/home-path/user-home-path']);
  }

  addUser(data: UserData) {
    return this.http.post(`${this.url}/user-details`, data);
  }

  addProduct(data: any) {
    return this.http.post(`${this.url}/cart`, data);
  }
  getCart() {
    return this.http.get(`${this.url}/cart`);
  }
  getSingle(data: number) {
    return this.http.get(`${this.url}/cart/${data}`);
  }
  delete(data: number) {
    return this.http.delete(`${this.url}/cart/${data}`);
  }
}
