import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Services/user.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { ViewproductComponent } from './viewproduct.component';

describe('ViewproductComponent', () => {
  let component: ViewproductComponent;
  let fixture: ComponentFixture<ViewproductComponent>;
  let userService: UserService;
  let toastr: ToastrService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewproductComponent, NavbarComponent],

      providers: [
        HttpClient,
        HttpHandler,
        {
          provide: ToastrService,
          useValue: { info: () => {}, warning: () => {}, error: () => {} },
        },
        MatDialogModule,
        UserService,
      ],
      imports: [RouterModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  beforeEach(() => {
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    toastr = TestBed.inject(ToastrService);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show toastr info message', () => {
    spyOn(toastr, 'info');

    component.added();

    expect(toastr.info).toHaveBeenCalledWith(
      'Item is already added to the cart..!'
    );
  });
});
