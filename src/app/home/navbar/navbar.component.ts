import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Services/user.service';
import { AccessService } from '../../Services/access.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  items = 0;
  user: any;
  userDetail: any;
  show: any;
  constructor(
    private access: AccessService,
    private route: Router,
    private toastr: ToastrService,
    private userservice:UserService
  ) {
    this.user = localStorage.getItem('Active-User');
    this.show = this.access.userNav;
    if (this.user == 'admin@aspire.com') {
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
  ngOnChanges() {}
  showUser = true;
  showAdmin = false;
  showLogin = true;
  showLogout = false;

  logout() {
    this.userservice.logout();
    this.toastr.success('Logout Successfull..!');
  }
}
