import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SHARED_COMPONENTS } from './components/components';
import { SERVICES } from './services/services';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule // without forRoot, because this is a child module
  ],
  exports: [
    SHARED_COMPONENTS
  ],
  declarations: [
    SHARED_COMPONENTS
  ],
  providers: [
    SERVICES
  ]
})

export class SharedModule {
}
