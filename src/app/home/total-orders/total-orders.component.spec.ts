import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrService } from 'ngx-toastr';
import { NavbarComponent } from '../navbar/navbar.component';

import { TotalOrdersComponent } from './total-orders.component';

describe('TotalOrdersComponent', () => {
  let component: TotalOrdersComponent;
  let fixture: ComponentFixture<TotalOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalOrdersComponent ,NavbarComponent ],
      providers:[HttpClient,HttpHandler,{
        provide:ToastrService, useValue:ToastrService
      }],
      imports:[RouterModule,RouterTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
