import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mmw-navigation',
  templateUrl: 'navbar.html'
})
export default class NavbarComponent {
  public isLoggedIn: boolean = false;
  public currentUser: any = { name : '' };
  public currentPath: string = 'fakeString';

  constructor(private router: Router) {}

  isNavItemActive(location) {
    return location === this.router.url ? 'active' : '';
  };
}
