import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
@Injectable({
    providedIn:'root'
})
export class UserService{
    constructor(private http :HttpClient){}
    url="http://localhost:3000";

    addUser(data:any){
        return this.http.post(`${this.url}/user-details`,data);
    }

    deleteUser(id:any){
        return this.http.delete(`${this.url}/user-details`,id);
    }
}