import { Injectable } from '@angular/core';
import {
  CanActivate,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AccessService } from '../access.service';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AccessGuard implements CanActivate {
  constructor(
    private access: AccessService,
    public user: UserService,
    private toastr: ToastrService
  ) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.access.active) {
      return true;
    } else {
      localStorage.clear();
      this.toastr.warning('Please login before continue..!');
      return false;
    }
  }
}
