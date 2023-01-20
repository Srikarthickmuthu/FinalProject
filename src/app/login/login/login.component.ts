import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccessService } from 'src/app/Services/access.service';
import { AdminService } from 'src/app/Services/admin.service';
import { UserData } from 'src/app/Services/Guard/sign-up';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public user!: UserData[];

  public loginform!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    public access: AccessService,
    public addminservice: AdminService
  ) {}

  ngOnInit() {
    this.loginform = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],

      password: ['', Validators.required],
    });
  }

   login() {

    this.access.login(this.loginform.value.email,this.loginform.value.password);

    this.loginform.reset();
   }
}
