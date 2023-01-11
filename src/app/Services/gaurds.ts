
import { Injectable } from "@angular/core";

import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

@Injectable({

    providedIn:"root"

})

export class canActivate implements CanActivate{

    constructor(private router:Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{

        const a=localStorage.getItem("Active-User");

        if(a!=null){

            return true;

        }
        else{

            alert("Please login before moving to next");

            this.router.navigate(['login-path']);

            return false;

        }

    }
}

