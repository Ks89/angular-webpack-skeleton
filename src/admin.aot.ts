import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { AdminModuleNgFactory } from '../aot/src/admin/admin.module.ngfactory';
import { decorateModuleRef } from './environment';

if (webpack.ENV === 'production') {
  enableProdMode();
}

export function main(): any {
  return platformBrowser()
    .bootstrapModuleFactory(AdminModuleNgFactory)
    .then(decorateModuleRef)
    .catch((err: any) => console.error(err));
}

export function bootstrapDomReady(): any {
  document.addEventListener('DOMContentLoaded', main);
}

bootstrapDomReady();