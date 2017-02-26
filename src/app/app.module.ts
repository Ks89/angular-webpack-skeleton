import { NgModule, ApplicationRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ROUTES }  from './app.routing';

// Third party opensource libraries (that are using scss/css)
import 'bootstrap-loader';
import 'font-awesome/css/font-awesome.css';
import '../styles/styles.scss';
import '../styles/headings.css';

import { ApplicationComponent } from './application/application.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { NavbarComponent } from './common/components/navbar/navbar.component';
import { PageHeaderComponent } from './common/components/page-header/page-header.component';
import { NotFound404Component } from "./pages/404/not-found404.component";

import { removeNgStyles, createNewHosts, createInputTransfer } from "@angularclass/hmr";
import { IdlePreloadModule } from "@angularclass/idle-preload";
import { RouterModule, PreloadAllModules } from "@angular/router";

@NgModule({
  imports: [
    IdlePreloadModule.forRoot(), // forRoot ensures the providers are only created once
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    //RouterModule.forRoot(appRoutes, { useHash: false, preloadingStrategy: IdlePreload }); <- NOT WITH AOT
    RouterModule.forRoot(ROUTES, { useHash: false, preloadingStrategy: PreloadAllModules })
],
  declarations: [
    ApplicationComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    PageHeaderComponent,
    NotFound404Component
  ],
  providers: [],
  bootstrap: [ ApplicationComponent ]
})

export class AppModule {

  // ----------- Hot Module Replacement via AngularClass library - BEGIN ------------
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store: any): any {
    if (!store || !store.state) return;
    console.log('HMR store', store);
    console.log('store.state.data:', store.state.data);
    // inject AppStore here and update it
    // this.AppStore.update(store.state)
    if ('restoreInputValues' in store) {
      store.restoreInputValues();
    }
    // change detection
    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }
  hmrOnDestroy(store: any): any {
    var cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // inject your AppStore and grab state then set it on store
    // var appState = this.AppStore.get()
    store.state = {data: 'example value'};
    // store.state = Object.assign({}, appState)
    // save input values
    store.restoreInputValues  = createInputTransfer();
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store: any): any {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
    // anything you need done the component is removed
  }
  // ----------- Hot Module Replacement via AngularClass library - END ------------
}