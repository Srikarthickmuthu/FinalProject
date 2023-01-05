import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  url="http://localhost:3000";

  getUser():Observable<any>{
    return this.http.get(`${this.url}/user-details`).pipe(map(res=>{return res}));
  }
  getProduct():Observable<any>{
    return this.http.get(`${this.url}/product-details`).pipe(map(res=>{return res}));
  }
}
