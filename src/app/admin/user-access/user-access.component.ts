import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../Services/admin.service';
import { UserData } from 'src/app/Services/Guard/sign-up';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-user-access',
  templateUrl: './user-access.component.html',
  styleUrls: ['./user-access.component.css']
})
export class UserAccessComponent implements OnInit {

  public user!: UserData[];
  public access = false;
  constructor(public addminservice: AdminService , private toastr:ToastrService) { }

  ngOnInit() {
    this.addminservice.getUser().subscribe(
      (res: UserData[]) => {
        this.user = res;
      }
    )
  }

  blockUser(data: Number) {
    this.addminservice.deleteUser(data).subscribe();
    this.ngOnInit();
    this.toastr.error("User blocked successfully..!");

  }
}
