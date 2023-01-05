import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
@Injectable({
    providedIn:'root'
})
export class UserService{
    constructor(private http :HttpClient){}
    url="http://localhost:3000";

    addUser(data:any){
        console.log(data);
        return this.http.post(`${this.url}/user-details`,data);
    }

    deleteUser(id:any){
        console.log(id);
        return this.http.delete(`${this.url}/user-details`,id);
    }
}