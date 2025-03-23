import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
   patientData = [
    {
      patientName: 'Mark Otto',
      contactNumber: '(555) 123-4567',
      healthIssue: 'Fever',
      recentlyVisitedTime: '2025-03-20 10:30 AM',
      details:''
    },
    {
      patientName: 'Jacob Thornton',
      contactNumber: '(555) 987-6543',
      healthIssue: 'Cough',
      recentlyVisitedTime: '2025-03-21 02:15 PM',
      details:''
    },
    {
      patientName: 'Larry the Bird',
      contactNumber: '(555) 111-2222',
      healthIssue: 'Headache',
      recentlyVisitedTime: '2025-03-22 09:00 AM',
      details:''
    },
    {
      patientName: 'Sarah Connor',
      contactNumber: '(555) 333-4444',
      healthIssue: 'Stomach Pain',
      recentlyVisitedTime: '2025-03-22 04:45 PM',
      details:''
    },
    {
      patientName: 'John Doe',
      contactNumber: '(555) 555-6666',
      healthIssue: 'Back Pain',
      recentlyVisitedTime: '2025-03-19 01:00 PM',
      details:''
    },
    {
      patientName: 'Jane Smith',
      contactNumber: '(555) 777-8888',
      healthIssue: 'Cold',
      recentlyVisitedTime: '2025-03-23 11:30 AM',
      details:''
    }
  ];
  
}
