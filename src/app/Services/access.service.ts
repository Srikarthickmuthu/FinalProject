import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from './admin.service';
import { UserData } from './Guard/sign-up';

@Injectable({
  providedIn: 'root',
})
export class AccessService {
  constructor(
    private router: Router,
    private toastr: ToastrService,
    public addminservice: AdminService
  ) {}

  public user!: UserData[];

  login(email: any, password: any) {
    if (email == 'admin@aspire.com' && password == 'admin@123') {
      localStorage.setItem('Active-User', email);
      this.router.navigate(['admin-path/delivery-path']);
      this.toastr.success('Welcome admin ');
    } else {
      this.addminservice.getUser().subscribe((res: UserData[]) => {
        const user = res.find(
          (a: any) => {
            return a.email === email && a.password === password;
          },
          (err: any) => {
            this.toastr.error(`${err.status} Error ${err.name}`);
          }
        );
        if (user) {
          this.toastr.success('Login Successful !!');

          localStorage.setItem('Active-User', email);

          this.router.navigate(['home-path/user-home-path']);
        } else {
          this.toastr.error('User Not Found');
        }
      });
    }
  }
}
