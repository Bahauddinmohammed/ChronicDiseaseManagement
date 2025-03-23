import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit  {
  constructor(private router:Router){

  }
  header:any;
  details:any={name:'John',phone:'+91 767 890 7890',email:'test@gmail.com'};

ngOnInit(): void {
  this.header = 'Patient Details';
}
}
