import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccessService } from 'src/app/Services/access.service';
import { AdminService } from 'src/app/Services/admin.service';
import { UserData } from 'src/app/Services/sign-up';

@Component({

  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})

export class LoginComponent implements OnInit {

  public user!: UserData[];

  public loginform!: FormGroup;

  constructor(private formbuilder: FormBuilder, public access: AccessService, public addminservice: AdminService, private router: Router) { }

  ngOnInit() {

    this.loginform = this.formbuilder.group({

      email: ['',[Validators.required,Validators.email]],

      password: ['',Validators.required]

    })
  }

  login() {

    if (this.loginform.value.email === "admin@aspire.com" && this.loginform.value.password === "admin@123") {

      alert("Welcome admin !!");

      localStorage.setItem("Active-User", this.loginform.value.email); //service

      this.loginform.reset();    
      
      this.router.navigate(['../../admin-path/admin-home-path']);

    }

    else {

      this.addminservice.getUser().subscribe(

        (res: UserData[]) => {

          const user = res.find((a: any) => {

            return a.email === this.loginform.value.email && a.password === this.loginform.value.password;

          }) //service

          if (user) {

            alert("Successful Login !...");

            localStorage.setItem("Active-User", this.loginform.value.email);

            this.loginform.reset();

            this.access.active = true;

            this.router.navigate(['/home-path/user-home-path']);

          }

          else {

            alert("User not found");

            this.loginform.reset();

          }
        }
      )
    }
  }
}
