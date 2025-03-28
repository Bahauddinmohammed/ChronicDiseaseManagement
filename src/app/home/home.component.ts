import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cardDetails = [
    {
      title: 'Covid-19 Updates',
      subtitle: 'Stay informed about the latest COVID-19 guidelines and vaccination information',
      btntext: 'Learn More'
    },
    {
      title: 'Heart Health',
      subtitle: 'Discover tips and information for maitaining a healthy heart and cardiovascular system',
      btntext: 'Learn More'
    },
    {
      title: 'Mental Wellness',
      subtitle: 'Explore Resources and support options for maintaining good mental health',
      btntext: 'Learn More'
    }
  ];
  ngOnInit(): void {
    {
     console.log(this.cardDetails,'ddd') 
    }
  }
}
