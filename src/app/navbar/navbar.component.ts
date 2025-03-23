import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit  {
  constructor(private router:Router){

  }
  navList:any;

ngOnInit(): void {
  this.navList=[
    {id:1,name:'Dashboard',route:'/dashboard'},
    {id:1,name:'My Profile',route:'/profile'},
    {id:1,name:'Logout'}
  ]
}

}
