import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  onSubmit(myForm: NgForm) {
    console.log(myForm);
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
