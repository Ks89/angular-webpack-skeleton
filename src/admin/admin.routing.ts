import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFound404Component } from "../app/pages/404/not-found404.component";
import { DashboardAdminComponent } from './pages/dashboard/dashboard.component';
import { IdlePreload } from "@angularclass/idle-preload";

const appRoutes: Routes = [
  // use http://localhost:3300/admin.html to login
  {path: '',                    component: DashboardAdminComponent},
  {path: '**',                 component: NotFound404Component}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: false, preloadingStrategy: IdlePreload });