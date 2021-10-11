import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public name = "Hi, I'm Kate!";
  public subtitle = "rock climber, aerialist, software engineer";
  public bio = "My passion lives where creativity and logic collide.  While pursuing various forms of artistic expression, thinking logically is at my core.  I earned a Bachelor of Science in Applied Mathematics from the University of Arkansas in 2018 and have since been working as a software engineer at BAE Systems, Inc in San Diego.  The process of creating new, intuitive designs to meet an abstract end goal is such a rewarding task- and it’s what I aim to do in my future.  I’m driven to design technologies that let humans interact with computers in novel ways to improve conventions effectively and creatively. ";

  constructor() { }

  ngOnInit(): void {
  }

}
