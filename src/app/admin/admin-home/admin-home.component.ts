import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AccessService } from 'src/app/Services/access.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
constructor(public access:AccessService,public routes:Router){}

logoutAdmin() {
  alert("Logout Successfull...! Admin")
  localStorage.clear();
  this.access.active=false;
}

}
