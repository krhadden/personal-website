import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public name = "Hi, I'm Kate!";
  public subtitle = "aerialist, rock climber, software engineer";
  public bio = "My passion lives where creativity and logic collide.  I love various forms of artistic expression, from aerial silks to painting, but thinking logically is at my core.  I earned a B.S. in Applied Mathematics from the University of Arkansas in 2018 and have been working as a software engineer ever since. In San Diego at BAE Systems, Inc., I created web apps for satellites and crime investigations.  At Microsoft, I created DevOps monitors for system automations and I migrated Azure services to a Top Secret cloud environment.  For the last year at Swoop I've built several large features, including a messaging system, mesh visualizations, and CryptoAgility profile creation.  I’m driven to design technologies that let humans interact with computers in novel ways and to improve conventions effectively and creatively.";

  constructor() { }

  ngOnInit(): void {
  }

}
