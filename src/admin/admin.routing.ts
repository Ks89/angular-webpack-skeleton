import { Routes } from '@angular/router';
import { NotFound404Component } from "./pages/404/not-found404.component";
import { DashboardAdminComponent } from './pages/dashboard/dashboard.component';

export const ROUTES: Routes = [
  // use http://localhost:3300/admin.html to login
  {path: '',                    component: DashboardAdminComponent},
  {path: '**',                 component: NotFound404Component}
];