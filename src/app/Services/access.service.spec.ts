import { TestBed, inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { of, throwError } from 'rxjs';
import { AdminService } from './admin.service';
import { AccessService } from './access.service';
import { UserData } from './Guard/sign-up';

describe('AccessService', () => {
  let accessService: AccessService;
  let routerSpy: jasmine.SpyObj<Router>;
  let toastrSpy: jasmine.SpyObj<ToastrService>;
  let adminServiceSpy: jasmine.SpyObj<AdminService>;

  beforeEach(() => {
    const routerSpyObj = jasmine.createSpyObj('Router', ['navigate']);
    const toastrSpyObj = jasmine.createSpyObj('ToastrService', ['success', 'error']);
    const adminServiceSpyObj = jasmine.createSpyObj('AdminService', ['getUser']);

    TestBed.configureTestingModule({
      providers: [
        AccessService,
        { provide: Router, useValue: routerSpyObj },
        { provide: ToastrService, useValue: {toastrSpyObj , warning:()=>{}}},
        { provide: AdminService, useValue: adminServiceSpyObj }
      ]
    });

    accessService = TestBed.inject(AccessService);
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    toastrSpy = TestBed.inject(ToastrService) as jasmine.SpyObj<ToastrService>;
    adminServiceSpy = TestBed.inject(AdminService) as jasmine.SpyObj<AdminService>;
  });

  it('should be created', () => {
    expect(accessService).toBeTruthy();
  });

  describe('login', () => {
    const email = 'test@example.com';
    const password = 'password';

    it('should navigate to admin page and show success message for admin login', () => {
      accessService.login('admin@aspire.com', 'Admin@123');
      expect(localStorage.getItem('Active-User-admin')).toBe('admin@aspire.com');
      expect(routerSpy.navigate).toHaveBeenCalledWith(['/admin-path/delivery-path']);
      expect(toastrSpy.success).toHaveBeenCalledWith('Welcome admin ');
    });

    it('should navigate to user page and show success message for valid user login', () => {
      const user = { email: 'test@example.com', password: 'password' };
      adminServiceSpy.getUser.and.returnValue(of([user]));
      accessService.login('test@example.com', 'password');
      expect(toastrServiceSpy.success).toHaveBeenCalledWith('Login Successful !!');
      expect(localStorage.getItem('Active-User')).toEqual('test@example.com');
      expect(routerSpy.navigate).toHaveBeenCalledWith(['/home-path/user-home-path']);
    });

    it('should show error message for invalid user login', () => {
      adminServiceSpy.getUser.and.returnValue(of([]));

      accessService.login(email, password);
      expect(localStorage.getItem('Active-User')).toBeNull();
      expect(routerSpy.navigate).not.toHaveBeenCalled();
      expect(toastrSpy.error).toHaveBeenCalledWith('User Not Found');
    });
    let adminServiceSpy: jasmine.SpyObj<AdminService>;
    let toastrServiceSpy: jasmine.SpyObj<ToastrService>;
    
    beforeEach(() => {
      adminServiceSpy = jasmine.createSpyObj('AdminService', ['getUser']);
      toastrServiceSpy = jasmine.createSpyObj('ToastrService', ['error']);
      TestBed.configureTestingModule({
        providers: [
          AccessService,
          { provide: AdminService, useValue: adminServiceSpy },
          { provide: ToastrService, useValue: toastrServiceSpy },
        ],
      });
      accessService = TestBed.inject(AccessService);
    });
    
    it('should show error message for server error', () => {
      const errorMessage = { status: 500, name: 'undefined' };
      adminServiceSpy.getUser.and.returnValue(throwError(errorMessage));
      expect(() => accessService.login('test@example.com', 'password')).toThrow();
      expect(toastrServiceSpy.error).toHaveBeenCalledWith('500 Error undefined');
    });
    
  });
});
