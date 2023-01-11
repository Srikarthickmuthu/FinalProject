import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(private formbuilder: FormBuilder, private http: HttpClient, public addminservice: AdminService, private router: Router) { }
  show = false;
  ngOnInit() {
    this.loginform = this.formbuilder.group({
      email: [''],
      password: ['']
    })
  }
  login() {
    if (this.loginform.value.email === "admin@aspire.com" && this.loginform.value.password === "admin@123") {
      alert("Welcome admin !!");
      localStorage.setItem("Active-User", this.loginform.value.email);
      this.loginform.reset();
      this.show = true;
      this.router.navigate(['../../admin-path/admin-home-path']);
    }
    else {
      this.addminservice.getUser().subscribe(
        (res: UserData[]) => {
          const user = res.find((a: any) => {
            return a.email === this.loginform.value.email && a.password === this.loginform.value.password
          })
          if (user) {
            alert("Login successful");
            localStorage.setItem("Active-User", this.loginform.value.email);
            this.loginform.reset();
            this.show = true;
            this.router.navigate(['/home-path/user-home-path'])
          }
          else {
            alert("User not found")
            this.loginform.reset();
          }
        }
      )
    }
  }
}
