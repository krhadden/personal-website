import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  public phoneNumber = "501-993-7056";
  public email = "krhadden@gmail.com";

  ngOnInit(): void {
  }

}
