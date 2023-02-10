import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrService } from 'ngx-toastr';
import { NavbarComponent } from 'src/app/home/navbar/navbar.component';
import { AddProduct } from 'src/app/Services/Guard/product';
import { UserData } from 'src/app/Services/Guard/sign-up';
import { UserService } from 'src/app/Services/user.service';
import { DeliveryComponent } from './delivery.component';

describe('DeliveryComponent', () => {
  let component: DeliveryComponent;
  let fixture: ComponentFixture<DeliveryComponent>;
  let dataUser:number;
  let userservice:UserService;
  let update:string;
  let cart:AddProduct;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeliveryComponent, NavbarComponent],
      providers: [
        HttpClient,
        HttpHandler,
        {
          provide: ToastrService,
          useValue: ToastrService,
        },
      ],
      imports: [RouterModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
