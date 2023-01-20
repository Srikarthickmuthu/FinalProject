import { Component, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AccessService } from './Services/access.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnChanges {
  title = 'OnlineShopping';
  user: any;
  constructor(
    private access: AccessService,
    private route: Router,
    private toastr: ToastrService
  ) {
    this.user = localStorage.getItem('Active-User');
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
    localStorage.clear();
    this.toastr.success('Logout Successfull..!');
    this.access.active = false;
    this.route.navigate(['home-path/user-home-path']);
  }
}
