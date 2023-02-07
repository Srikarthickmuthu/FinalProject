import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrService } from 'ngx-toastr';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let toastr:ToastrService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      providers:[{
        provide:ToastrService, useValue:ToastrService
      },HttpClient,HttpHandler],
      imports:[RouterModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it ('should call',()=>{
    expect(component.logout).toBe(toastr.success);
    expect(toastr.success).withContext("Logout Successfull..!");
  })
});
