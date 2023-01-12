import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent {

  constructor(public userservice:UserService){}

onSubmit(myForm: NgForm) {

    this.userservice.addUser(myForm.value).subscribe();
    myForm.resetForm();
}

countryList = [
    { "countryname": "India" },
    { "countryname": "America" },
    { "countryname": "Japan" },
    { "countryname": "China" },
    { "countryname": "Srilanka" },
    { "countryname": "Russia" }
];
}


