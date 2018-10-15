import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user = {
    "name" : "Doe",
    "firstName" : "John",
    "age":25,
    quote : "",
    photo:"https://randomuser.me/api/portraits/lego/2.jpg"
  }

  public toggled = "visible";
  
  public toggleAge():void{
    if (this.toggled == "hidden"){
      this.toggled = " visible";
    } else {
      this.toggled = "hidden";
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
