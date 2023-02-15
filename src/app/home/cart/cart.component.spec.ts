import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrService } from 'ngx-toastr';
import { NavbarComponent } from '../navbar/navbar.component';
import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let data:any;
  let id:number;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartComponent, NavbarComponent],
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

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should call ngOnInit()', () => {
  //   spyOn(component, 'ngOnInit');
  //   component.ordered();
  //   expect(component.ngOnInit).toHaveBeenCalled();
  // });
  it('',()=>{
    component.increment(data , id)
  })
  it('',()=>{
    component.decrement(data , id)
  })
});
