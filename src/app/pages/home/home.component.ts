import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mmw-home-page',
  styleUrls: ['home.scss'],
  templateUrl: 'home.html'
})
export default class HomeComponent {
  public pageHeader: Object;
  public message: string;

  constructor() {
    this.pageHeader = {
      title: 'KS',
      strapline: 'Welcome'
    };
    this.message = 'Welcome to my website';
  }
}
