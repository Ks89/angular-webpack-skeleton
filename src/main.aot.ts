import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory';

if (webpack.ENV === 'production') {
  enableProdMode();
}

export function main(): any {
  return platformBrowser().bootstrapModuleFactory(AppModuleNgFactory)
    .catch(err => console.log(err));
}

export function bootstrapDomReady(): any {
  document.addEventListener('DOMContentLoaded', main);
}

bootstrapDomReady();