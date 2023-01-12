import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccessService } from './access.service';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {


  constructor(private access:AccessService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.access.active){
          return true;
      }
      else{
        alert("Please login before continue ...")
        return false;
      }
  }
  
}
