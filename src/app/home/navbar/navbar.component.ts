import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  showUser!: boolean;
  showLogout!: boolean;

  constructor(
    private toastr: ToastrService,
    private userservice: UserService
  ) {}

  ngOnInit() {
    const user = localStorage.getItem('Active-User');
    const admin = localStorage.getItem('Active-User-admin');
    this.showUser = !!user;
    this.showLogout = !!admin || !!user;
  }

  logout() {
    this.toastr.success('Logout Successfull..!');
    this.showLogout = false;
    this.userservice.logout();
  }
}