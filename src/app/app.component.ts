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
    if(this.user!=null){
      this.showLogout=true;
      this.showLogin=false;
    }

  }
  showLogin=true;
  showLogout=false;

logout() {
  alert("Logout Successfull...! User")
  localStorage.clear();
  this.access.active=false;
  this.route.navigate(["home-path/user-home-path"])
}  
}
