import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AccessGuard implements CanActivate {
  constructor(public user: UserService, private toastr: ToastrService) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const access = localStorage.getItem('Active-User');
    if (access != null) {
      return true;
    } else {
      this.toastr.warning('Please login before continue..!');
      return false;
    }
  }
}
