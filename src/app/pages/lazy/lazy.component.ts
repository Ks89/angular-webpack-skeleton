import { Component } from '@angular/core';

@Component({
  selector: 'mmw-cv-page',
  templateUrl: 'lazy.html'
})
export class LazyComponent {
  pageHeader: any;

  constructor() {
    this.pageHeader = {
      title: 'LAZY',
      strapline: ''
    };
  }
}
