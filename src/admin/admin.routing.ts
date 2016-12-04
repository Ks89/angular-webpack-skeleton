import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import DashboardAdminComponent from './pages/dashboard/dashboard.component';

const appRoutes: Routes = [
  {path: '',                    component: DashboardAdminComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
