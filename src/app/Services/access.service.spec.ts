import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ToastrService } from 'ngx-toastr';
import { AccessService } from './access.service';
// import { AdminService } from './admin.service';
// import { UserData } from './Guard/sign-up';

describe('AccessService', () => {
  let service: AccessService;
  // let adminService:AdminService;
  // let user:UserData;
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
    });
    service = TestBed.inject(AccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  //  it('',()=>{
  //   service.ngOnInit();
  //   expect(adminService.getUser().subscribe()).toHaveBeenCalledTimes(1)
  // })
});