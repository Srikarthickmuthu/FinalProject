/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TrackDeliveryComponent } from './trackDelivery.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrService } from 'ngx-toastr';

describe('TrackDeliveryComponent', () => {
  let component: TrackDeliveryComponent;
  let fixture: ComponentFixture<TrackDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackDeliveryComponent ],
      providers:[HttpClient,HttpHandler,{
        provide:ToastrService, useValue:ToastrService
      }],
      imports:[RouterModule,RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
