import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { routing }  from './app.routing';

import ApplicationComponent from './application/application.component';
import HomeComponent from './pages/home/home.component';

import FooterComponent from './common/components/footer/footer.component';
import NavbarComponent from './common/components/navbar/navbar.component';
import PageHeaderComponent from './common/components/page-header/page-header.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    ApplicationComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    PageHeaderComponent
  ],
  providers: [],
  bootstrap: [ ApplicationComponent ]
})

export class AppModule { }
