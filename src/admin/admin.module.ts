import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { routing }  from './admin.routing';

import ApplicationAdminComponent from './application/application.component';
import DashboardAdminComponent from './pages/dashboard/dashboard.component';

import NavbarAdminComponent from "./common/components/navbar/navbar.component";

import { SERVICES } from './common/services/services';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LaddaModule } from 'angular2-ladda';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    LaddaModule,
    routing
  ],
  declarations: [
    ApplicationAdminComponent,
    DashboardAdminComponent,
    NavbarAdminComponent
  ],
  providers: [
    SERVICES
  ],
  bootstrap: [ ApplicationAdminComponent ]
})

export class AdminModule { }
