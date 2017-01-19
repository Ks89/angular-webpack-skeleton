import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { AdminModuleNgFactory } from '../aot/src/admin/admin.module.ngfactory';

if (webpack.ENV === 'production') {
  enableProdMode();
}

export function main(): any {
  return platformBrowser().bootstrapModuleFactory(AdminModuleNgFactory)
    .catch(err => console.log(err));
}

export function bootstrapDomReady(): any {
  document.addEventListener('DOMContentLoaded', main);
}

bootstrapDomReady();