import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }

  /**
   * Scroll to selected section
   * @param id name of destination section
   */
  jumpTo(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      console.log("hi", element);
      element.scrollIntoView({behavior: 'smooth'});
    }
  }

}
