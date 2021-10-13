import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public name = "Hi, I'm Kate!";
  public subtitle = "rock climber, aerialist, software engineer";
  public bio = "My passion lives where creativity and logic collide.  I love various forms of artistic expression, from aerial silks to painting to photography (all photos on this site are mine!). Thinking logically is at my core-  I earned a B.S. in Applied Mathematics from the University of Arkansas in 2018 and have been working as a software engineer ever since. In San Diego at BAE Systems, Inc., I created web apps for satellites and crime investigations.  For the past year at Microsoft, I've been creating DevOps monitors for automations and migrating Azure services to a Top Secret cloud environment.  The process of creating new, intuitive designs to meet an abstract end goal is such a rewarding task, and it’s what I aim to do in my future.  I’m driven to design technologies that let humans interact with computers in novel ways and to improve conventions effectively and creatively.";

  constructor() { }

  ngOnInit(): void {
  }

}
