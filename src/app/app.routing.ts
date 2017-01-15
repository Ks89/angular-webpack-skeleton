import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdlePreload } from "@angularclass/idle-preload";

import { HomeComponent } from './pages/home/home.component';
import { NotFound404Component } from "./pages/404/not-found404.component";

const appRoutes: Routes = [

  {path: '',                                component: HomeComponent},
  {path: 'home',                            component: HomeComponent},
  {path: 'lazy',                            loadChildren: './pages/lazy/index#LazyModule'}, // lazy loading
  {path: '**',                              component: NotFound404Component}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: false, preloadingStrategy: IdlePreload });
