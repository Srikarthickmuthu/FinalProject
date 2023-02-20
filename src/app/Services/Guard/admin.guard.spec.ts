import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminGuard } from './admin.guard';

describe('AdminGuard', () => {
  let guard: AdminGuard;
  let router:Router;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler,
        {
          provide: ToastrService,
          useValue: {warning:()=>{}},
        },
        {
          provide:Router , useValue:router
        }
      ],
    });
    guard = TestBed.inject(AdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
  it('grant access', () => {
    const canActivate = guard.canActivate();
    expect(canActivate).toBeTrue();
  });
  // it ('should return false',()=>{
  //   expect(guard.canActivate()).toBe(false);
  //   expect(router.navigate).toHaveBeenCalledWith(['/home-path/user-home-path'])
  // })
});
