import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, NgForm, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { access } from 'fs';
import { ToastrService } from 'ngx-toastr';
import { NavbarComponent } from 'src/app/home/navbar/navbar.component';
import { AccessService } from 'src/app/Services/access.service';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service:AccessService;
  let loginform:NgForm;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent , NavbarComponent ],
      imports:[RouterModule,RouterTestingModule,ReactiveFormsModule],
      providers:[HttpClient,FormBuilder,HttpHandler,{
        provide:ToastrService, useValue:ToastrService
      }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
