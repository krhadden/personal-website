import { Component, OnInit } from '@angular/core';

interface Certification {
  title: string;
  date: string;
  description: string;
}
@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  public skills: string[] = [
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS/SCSS",
    "Angular",
    "React",
    "RxJS"
  ];

  public tools: string[] = [
    "Adobe Illustrator",
    "Adobe XD",
    "Git",
    "Jira",
    "Bitbucket",
    "Jenkins",
    "Amazon Web Services"
  ];

  public certifications: Certification[] = [
    {
      title: 'Top Secret - SCI',
      date: 'July 2019',
      description: 'Security Clearance'
    },
    {
      title: 'RYT 200hr - Vinyasa & Hatha',
      date: 'October 2018',
      description: 'Registered Yoga Teacher'
    },
    {
      title: 'Aerial Yoga and Fitness Instructor',
      date: 'February 2020',
      description: 'Registered Aerial Yoga Teacher'
    },
    {
      title: 'Aerial Performer',
      date: 'May 2019',
      description: 'Member of performance troupe'
    }
  ];

  ngOnInit(): void {
  }

}
