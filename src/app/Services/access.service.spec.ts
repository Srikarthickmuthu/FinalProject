import { TestBed, inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { of, throwError } from 'rxjs';
import { AdminService } from './admin.service';
import { AccessService } from './access.service';
import { UserData } from './Guard/sign-up';

describe('AccessService', () => {
  let accessService: AccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccessService],
    });

    accessService = TestBed.inject(AccessService);
  });

  it('should be created', () => {
    expect(accessService).toBeTruthy();
  });
});
