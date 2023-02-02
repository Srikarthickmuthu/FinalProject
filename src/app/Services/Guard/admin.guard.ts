import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(public user: UserService, private toastr: ToastrService , private router:Router) {}
  canActivate()
    :| Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree {
    const admin=localStorage.getItem('Active-User-admin');
    if (admin!=null){
      return true;
    }
    else{
      this.toastr.warning('Access denied..!');
      this.router.navigate(['/home-path/user-home-path']);
      return false;
    }
  }
  
}
