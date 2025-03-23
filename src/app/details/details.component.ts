import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit  {
  constructor(private router:Router){

  }
  header:any;
  role:any='doctor';
  isPatient:boolean=false;
  listDetails:any=[{name:'John',phone:'+91 767 890 7890',email:'john@gmail.com'},
   { name:'vani',phone:'+91 647 890 7890',email:'vani56@gmail.com'},
   {name:'jaya',phone:'+91 767 321 7890',email:'jaya@gmail.com'},
   { name:'yasi',phone:'+91 647 890 3232',email:'yasi68@gmail.com'} ,
   {name:'wani',phone:'+91 767 890 7890',email:'john@gmail.com'},
   { name:'hari',phone:'+91 647 890 7890',email:'vani56@gmail.com'},
   {name:'kumar',phone:'+91 767 321 7890',email:'jaya@gmail.com'},
   { name:'jasan',phone:'+91 647 890 3232',email:'yasi68@gmail.com'}  
  ];

ngOnInit(): void {
  this.header = this.role !== ''?'Patient Data' :'Patients List'  ;
  this.isPatient=this.role !== ''?true:false;
}
}