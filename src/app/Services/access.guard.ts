import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccessService } from './access.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {


  constructor(private access:AccessService , public user:UserService , private route:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.access.active){
          return true;
      }

      else{
        alert("Please login before continue ...");
        // this.route.navigate(['./login-path']);
        return false;
      };
      // if(this.user.islogin()){
      //   return true;
      // }

  }
  // if(this.access.islogin()){}
  
}
