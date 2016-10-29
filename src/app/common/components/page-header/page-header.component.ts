import { Component, Input } from '@angular/core';

@Component({
  selector: 'mmw-page-header',
  templateUrl: 'page-header.html'
})
export default class PageHeaderComponent {
  @Input() title: string;
  @Input() strapline: string;
}
