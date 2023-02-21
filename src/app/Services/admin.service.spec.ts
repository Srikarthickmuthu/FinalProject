import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AdminService } from './admin.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AddProduct } from './Guard/product';
describe('AdminService', () => {
  let service: AdminService;
  let id: number;
  let http: HttpClient;
  let httpMock: HttpTestingController;
  let url = 'http://localhost:3000';
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler , AdminService],
      imports:[HttpClientTestingModule]
    });
    http = TestBed.inject(HttpClient);
    service = TestBed.inject(AdminService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
