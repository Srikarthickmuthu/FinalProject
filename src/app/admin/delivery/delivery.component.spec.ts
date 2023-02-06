import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrService } from 'ngx-toastr';
import { NavbarComponent } from 'src/app/home/navbar/navbar.component';
import { UserService } from 'src/app/Services/user.service';
import { DeliveryComponent } from './delivery.component';

describe('DeliveryComponent', () => {
  let component: DeliveryComponent;
  let fixture: ComponentFixture<DeliveryComponent>;
  let dataUser:Number;
  let service:UserService;
  let response:any;
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
  it('should have the data',()=>{
    return expect(component.delivered(dataUser)).toHaveBeenCalledWith(service.getSingle(dataUser).subscribe(response));
  })
  it('should get the single data',()=>{
    return expect(service.getSingle(dataUser).subscribe());
  })
});
