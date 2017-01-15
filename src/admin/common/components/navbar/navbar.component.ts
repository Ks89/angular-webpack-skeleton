import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mmw-admin-navigation',
  templateUrl: 'navbar.html'
})
export class NavbarAdminComponent {
  public currentPath: string = 'fakeString';

  constructor(private router: Router) {}

  isNavItemActive(location) {
    return location === this.router.url ? 'active' : '';
  };
}
