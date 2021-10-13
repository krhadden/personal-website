import { Component, OnInit } from '@angular/core';

class Experience {
  constructor (props) {
    return Object.assign(this, props);
  }

  get jobDates(): string {
    return `${this.startDate} - ${this.endDate}`;
  }

  get jobLocation(): string {
    return `${this.location.city}, ${this.location.state}`;
  }

}
interface Experience {
  title: string;
  company: string;
  location: Location;
  startDate: string;
  endDate: string;
  notes: string[];
}

interface Location {
  city: string;
  state: string;
}
@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  public experiences: Experience[] = [
    new Experience({
      title: 'Software Engineer',
      company: 'Microsoft',
      startDate: 'August 2020',
      endDate: 'Present',
      location: {
        city: 'Seattle',
        state: 'WA'
      },
      notes: [
        'Defined alarm metrics & implemented monitors on automation failures for 300+ services',
        'Built self-service automation failure-monitors onboarding guide adopted by dataverse organization',
        'Updated 12 services to autorotated certification policies to reduce operational burden and downtime',
        'Piloted rate-limiting security feature to prevent destructive actions',
        'Designed and built diagnostic tool for real-time server, system, and network performance on VMSS instances',
        'Successfully onboarded multiple services to Top Secret government cloud',
        'Leading the service’s effort to migrate from ADAL to MSAL authentication'
      ]
    }),
    new Experience({
      title: 'Software Engineer II',
      company: 'BAE Systems',
      startDate: 'June 2018',
      endDate: 'July 2020',
      location: {
        city: 'San Diego',
        state: 'CA'
      },
      notes: [
        'Collaborated and prototyped in Adobe Illustrator with designer for use case verification',
        'Planned a phased release cycle roadmap leveraging agile methodology',
        'Developed web app with Angular, Leaflet, Vis, and D3 that included whiteboard and mapping features',
        'Led demos for potential external investors and internal leadership.',
        'Developed React, YUI, and Cesium web client that provides the ability for comprehensive image exploitation, precision targeting, and mission planning',
        'Developed a Top Secret satellite product in an Agile environment with TypeScript using Angular, Material, and Cesium.'
      ]
    }),
    new Experience({
      title: 'Software Engineer Internship',
      company: 'Dillards Technology',
      startDate: 'June 2017',
      endDate: 'August 2017',
      location: {
        city: 'Little Rock',
        state: 'AR'
      },
      notes: [
        'Created a web application for employee performance reviews with AngularJS, Groovy on Grails, and SQL.',
        'Designed mockups and led iterative design meetings with managers and HR.',
        'Served multiple roles contributing to front end, back end, and business analyst efforts.'
      ]
    })
  ]

  ngOnInit(): void {
  }

}
