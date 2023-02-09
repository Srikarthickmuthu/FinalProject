import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AdminService } from './admin.service';
import { AddProduct } from './Guard/product';
describe('AdminService', () => {
  let service: AdminService;
  let data: number;
  let data1: AddProduct;
  let http: HttpClient;
  let update: AddProduct;
  let url = 'http://localhost:3000';
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler],
    });
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  // it('should delete the product', () => {
  //   expect(service.deleteProduct(data)).toBe(
  //     http.delete(`${url}/product-details/${data}`)
  //   );
  // });

  // it('should add the product', () => {
  //   expect(service.addProduct(data1)).toBe(
  //     http.post(`${url}/product-details`, data1)
  //   );
  // });
  // it('should delete the user details', () => {
  //   expect(service.deleteUser(data)).toBe(
  //     http.post(`${url}/user-details`, data)
  //   );
  // });
  // it('should edit the product', () => {
  //   expect(service.editProduct(data, update)).toBe(
  //     http.post(`${url}/product-details/${data}`, update)
  //   );
  // });
  // it('should update the delivery status', () => {
  //   expect(service.updateDelivery(data, data1)).toBe(
  //     http.put(`${url}/cart/${data}`, data1)
  //   );
  // });
  it('',()=>{
    service.deleteProduct(data);
  })
  it('',()=>{
    service.deleteUser(data);
  })
  it('',()=>{
    service.editProduct(data , update);
  })
  it('',()=>{
    service.addProduct(data1);
  })
  it('',()=>{
    service.updateDelivery(data , data1);
  })
});
