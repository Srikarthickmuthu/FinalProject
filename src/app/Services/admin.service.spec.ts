import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AdminService } from './admin.service';

describe('AdminService', () => {
  let service: AdminService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler],
    });
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return user details', () => {
  let userDetails:any;
  const result = service.getUser();
  expect(result).toEqual(userDetails);
});
});

