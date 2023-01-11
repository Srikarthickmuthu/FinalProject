import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

logout() {
  localStorage.removeItem("Active-User");
  console.log("the user is");
}
  user:any;
  constructor(){
    this.user=localStorage.getItem("Active-User");
    console.log("the user is" ,this.user);
  }
  
}
