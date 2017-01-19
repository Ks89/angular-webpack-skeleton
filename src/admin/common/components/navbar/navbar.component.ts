import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mmw-admin-navigation',
  templateUrl: 'navbar.html'
})
export class NavbarAdminComponent {
  currentPath: string = 'fakeString';

  constructor(private router: Router) {}

  isNavItemActive(location: any) {
    return location === this.router.url ? 'active' : '';
  };
}
