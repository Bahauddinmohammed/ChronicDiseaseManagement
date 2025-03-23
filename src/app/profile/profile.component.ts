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

  details:any={
    
    patientName: 'Larry the Bird',
    contactNumber: '(555) 111-2222',
    healthIssue: 'Headache',
    recentlyVisitedTime: '2025-03-22 09:00 AM',
    email:'test@gmail.com'
  };

ngOnInit(): void {
  this.header = 'Patient Details';
}
}
