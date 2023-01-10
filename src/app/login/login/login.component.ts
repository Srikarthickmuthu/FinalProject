import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';
import { LoginService } from 'src/app/Services/login.service';
import { UserData } from 'src/app/Services/sign-in';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public user!:UserData[];
  constructor (public LoginService: LoginService ,public adminservice:AdminService)   {}
  
  onSubmit(loginform:NgForm){
    this.adminservice.getUser().subscribe(
      (res:UserData[])=>{
        this.user=res;
      }
    )
      console.log(loginform);
      console.log(loginform.value);
    sessionStorage.setItem("userid",loginform.value);

  }
}
