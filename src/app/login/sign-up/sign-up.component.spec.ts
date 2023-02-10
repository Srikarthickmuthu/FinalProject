import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrService } from 'ngx-toastr';
import { NavbarComponent } from 'src/app/home/navbar/navbar.component';
import { errorMessage } from 'src/app/Services/Guard/product';

import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let myForm:NgForm;
  let err:errorMessage;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpComponent, NavbarComponent ],
      imports:[FormsModule, RouterModule , RouterTestingModule],
      providers:[HttpClient,HttpHandler,{
        provide:ToastrService, useValue:ToastrService
      }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('',()=>{
    component.handleError(err)
  })
  it('',()=>{
    component.handleSuccess(myForm);
  })
});
