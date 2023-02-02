import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  user: any;
  admin:any;

  showUser = true;
  showAdmin = false;
  showLogin = true;
  showLogout = false;
  constructor(private toastr: ToastrService, private userservice: UserService) {
    this.user = localStorage.getItem('Active-User');
    this.admin=localStorage.getItem("Active-User-admin")
    if (this.admin!=null) {
      this.showUser = false;
      this.showAdmin = true;
      this.showLogin = false;
      this.showLogout = true;
    }
    if (this.user != null) {
      this.showLogin = false;
      this.showLogout = true;
    }
  }

  logout(): void {
    this.userservice.logout();
    this.toastr.success('Logout Successfull..!');
  }
}
