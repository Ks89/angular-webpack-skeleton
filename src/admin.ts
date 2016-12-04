import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AdminModule }  from './admin/admin.module';

if (webpack.ENV === 'production') {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AdminModule);
