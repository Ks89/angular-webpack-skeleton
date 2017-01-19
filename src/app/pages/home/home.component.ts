import { Component } from '@angular/core';

@Component({
  selector: 'mmw-home-page',
  styleUrls: ['home.scss'],
  templateUrl: 'home.html'
})
export class HomeComponent {
  pageHeader: any;
  message: string;

  constructor() {
    this.pageHeader = {
      title: 'KS',
      strapline: 'Welcome'
    };
    this.message = 'Welcome to my website';
  }
}
