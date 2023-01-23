import { HttpClient, HttpHandler } from '@angular/common/http';
import { InjectionToken } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule, MAT_DIALOG_SCROLL_STRATEGY } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrService, TOAST_CONFIG } from 'ngx-toastr';
import { NavbarComponent } from '../navbar/navbar.component';

import { ViewproductComponent } from './viewproduct.component';

describe('ViewproductComponent', () => {
  let component: ViewproductComponent;
  let fixture: ComponentFixture<ViewproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewproductComponent , NavbarComponent],
      providers:[HttpClient,HttpHandler,{
        provide:ToastrService, useValue:ToastrService
      },MatDialogModule],
      imports:[RouterModule,RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
