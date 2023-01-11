import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, Observable } from 'rxjs';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  url="http://localhost:3000";

  getUser():Observable<any>{
    return this.http.get(`${this.url}/user-details`).pipe(map(res=>{return res})); //
  }
  getProduct():Observable<any>{
    return this.http.get(`${this.url}/product-details`).pipe(map(res=>{return res}));
  }
  getProductEdit(data:any):Observable<any>{
    return this.http.get(`${this.url}/product-details/${data}`).pipe(map(res=>{return res}));
  }
  deleteProduct(data:any){
    return this.http.delete(`${this.url}/product-details/${data}`);
  }
  deleteUser(data:any){
    return this.http.delete(`${this.url}/user-details/${data}`);
  }
  editProduct(data:any,update:any){
    return this.http.put(`${this.url}/product-details/${data}`,update);
  }
  addProduct(data:any){
    return this.http.post(`${this.url}/product-details`,data);
  }
}
