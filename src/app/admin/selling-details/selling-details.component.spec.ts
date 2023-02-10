import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrService } from 'ngx-toastr';
import { NavbarComponent } from 'src/app/home/navbar/navbar.component';
import { SellingDetailsComponent } from './selling-details.component';

describe('SellingDetailsComponent', () => {
  let component: SellingDetailsComponent;
  let fixture: ComponentFixture<SellingDetailsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SellingDetailsComponent, NavbarComponent],
      providers: [
        HttpClient,
        HttpHandler,
        {
          provide: ToastrService,
          useValue: ToastrService,
        },
        MatDialog,
      ],
      imports: [RouterModule, RouterTestingModule, MatDialogModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SellingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('setSessionData', () => {
    it('should set the session storage items', () => {
      const spy = spyOn(sessionStorage, 'setItem');
      const data = 'exampleData';
      const id = 'exampleId';
      let Quantity:any;
      component.setSessionData(data, id);
      expect(spy).toHaveBeenCalledWith('quantity', Quantity);
      expect(spy).toHaveBeenCalledWith('productName', data);
      expect(spy).toHaveBeenCalledWith('productPrice', id);
    });
  });
  it('',()=>{
    component.openTallyDialog();
  })
});


