import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccessService } from './Services/access.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:any;
  constructor(private access:AccessService,private route:Router){
    this.user=localStorage.getItem("Active-User");
    console.log("the user is" ,this.user);
  }

  
logout() {
  alert("Logout Successfull...!")
  localStorage.removeItem("Active-User");
  this.access.active=false;
  this.route.navigate(["home-path/user-home-path"])
}
  
  show(){
    if(this.user!="admin@aspire.com"){
      return true;
    }
    else{
      return false;
    }
  }
  
}
