import { HttpClient, HttpHandler } from '@angular/common/http';

import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { AddProduct } from 'src/app/Services/Guard/product';
import { UserService } from 'src/app/Services/user.service';
import { NavbarComponent } from '../navbar/navbar.component';

import { ViewproductComponent } from './viewproduct.component';

describe('ViewproductComponent', () => {
  let component: ViewproductComponent;
  let fixture: ComponentFixture<ViewproductComponent>;
  let userService: UserService;
  let toastrService: ToastrService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewproductComponent, NavbarComponent],

      providers: [
        HttpClient,
        HttpHandler,
        {
          provide: ToastrService,
          useValue: { info: () => {} , warning:()=>{} , error:()=>{}}
          },
        MatDialogModule, 
        UserService,
      ],
      imports: [RouterModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  beforeEach(() => {
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    toastrService = TestBed.inject(ToastrService);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should add product to the cart if user is logged in', () => {
    const user = 'testuser';
    const product = {
      id: 123,
      name: 'Test Product',
      productPrice: 10.0,
      quantity: 1,
      total: 10.0,
      show: true,
    };
    component.user = user;
    spyOn(userService, 'addProduct').and.returnValue(of({}));
    component.cart(product);
    expect(userService.addProduct).toHaveBeenCalledWith({
      userId: user,
      deliveryStatus: 'Ordered',
      quantity: 1,
      total: 10.0,
      name: 'Test Product',
      productPrice: 10.0,
      show: false,
    });
    expect(product.show).toBe(false);
    expect(toastrService.success).toHaveBeenCalledWith(
      'Product added to the cart..!'
    );
  });

  it('should show a warning if user is not logged in', () => {
    const product = {
      id: 123,
      name: 'Test Product',
      productPrice: 10.0,
      quantity: 1,
      total: 10.0,
      show: true,
    };
    component.cart(product);
    expect(toastrService.warning).toHaveBeenCalledWith(
      'Please login before continue..!'
    );
    setTimeout(() => {
      expect(router.navigate).toHaveBeenCalledWith([
        '/loginSignUp-path/login-path',
      ]);
    }, 1000);
  });

  it('should show an info toast with the correct message', () => {
    component.added();
    expect(toastrService.info).toHaveBeenCalledWith(
      'Item is already added to the cart..!'
    );
  });
  it('should set cart1 and product1 with the correct data', fakeAsync(() => {
    const cartItem: AddProduct = {
      quantity: 5,
      productPrice: 5,
      total: 25,
      length: 1,
      userId: '1',
      id: 1,
      show: true,
      productName: 'abc',
      productImage: 'abc',
      deliveryStatus: 'ordered',
      productType: 'kilo',
    };
    component.user = 'user1';
    component.getCart();
    tick(800);
    expect(component.cart1).toEqual([cartItem]);

    expect(component.product1).toEqual([
      { id: 1, productName: 'Product1', show: false },
      { id: 2, productName: 'Product2', show: true },
      { id: 3, productName: 'Product3', show: true },
    ]);
    component.id1 = ['Product1', 'Product3'];
    component.product = [
      {
        quantity: 5,
        productPrice: 5,
        total: 25,
        length: 1,
        userId: '1',
        id: 1,
        show: true,
        productName: 'abc',
        productImage: 'abc',
        deliveryStatus: 'ordered',
        productType: 'kilo',
      },
      {
        quantity: 5,
        productPrice: 5,
        total: 25,
        length: 1,
        userId: '1',
        id: 1,
        show: true,
        productName: 'abc',
        productImage: 'abc',
        deliveryStatus: 'ordered',
        productType: 'kilo',
      },
      {
        quantity: 5,
        productPrice: 5,
        total: 25,
        length: 1,
        userId: '1',
        id: 1,
        show: true,
        productName: 'abc',
        productImage: 'abc',
        deliveryStatus: 'ordered',
        productType: 'kilo',
      },
    ];
    component.ngOnInit();
    tick(800);
    expect(component.product1).toEqual([
      { id: 1, productName: 'Product1', show: false },
      { id: 2, productName: 'Product2', show: true },
      { id: 3, productName: 'Product3', show: false },
    ]);
  }));
});
