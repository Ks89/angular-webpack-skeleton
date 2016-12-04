import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import HomeComponent from './pages/home/home.component';

const appRoutes: Routes = [

  {path: '',                                component: HomeComponent},
  {path: 'home',                            component: HomeComponent}
];

// disable # in paths
// export const appRoutingProviders: any[] = [
//   { provide: LocationStrategy, useClass: HashLocationStrategy }
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
