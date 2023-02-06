import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    public addminservice: AdminService,
    public router: Router
  ) {}

  ngOnInit() {
    this.loginform = this.formbuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]],

      password: ['', [Validators.required , Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$') , Validators.minLength(8)]],
    });
  }

  login() {
    this.access.login(
      this.loginform.value.email,
      this.loginform.value.password
    );
    this.loginform.reset();
  }
}

