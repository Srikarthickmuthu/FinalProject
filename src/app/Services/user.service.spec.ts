import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrService } from 'ngx-toastr';
import { UserData } from './Guard/sign-up';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let data: any;
  let data1: UserData;
  let data2: number;
  let http: HttpClient;
  let url = 'http://localhost:3000';
  let router: Router;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler,
        {
          provide: ToastrService,
          useValue: ToastrService,
        },
      ],
      imports: [RouterTestingModule],
    });
    service = TestBed.inject(UserService);
    router = TestBed.inject(Router);
    spyOn(localStorage, 'clear');
    spyOn(router, 'navigate');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should get tye user', () => {
    expect(service.getUser()).toBe(localStorage.getItem('Active-User'));
  });
  it('should add the product', () => {
    expect(service.addProduct(data)).toBe(http.post(`${url}/cart`, data));
  });
  it('should add the user data', () => {
    expect(service.addUser(data1)).toBe(
      http.post(`${url}/user-details`, data1)
    );
  });
  it('should get the single data of the user', () => {
    expect(service.getSingle(data2)).toBe(http.get(`${url}/cart/${data2}`));
  });
  it('should get the single data of the user', () => {
    expect(service.getSingleProduct(data2)).toBe(
      http.get(`${url}/product-details/${data2}`)
    );
  });
  it('should delete the added cart product', () => {
    expect(service.delete(data2)).toBe(http.delete(`${url}/cart/${data}`));
  });
  it('should clear localStorage and navigate to home path with user home path', () => {
    service.logout();
    expect(localStorage.clear).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/home-path/user-home-path']);
  });
});
