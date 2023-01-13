import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent {
  
  password: any;

  constructor(public userservice:UserService){}

  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";

  Emailpattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  passwordPattern='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$';

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


