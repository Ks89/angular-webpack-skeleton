/*
 * MIT License
 *
 * Copyright (c) 2017 Stefano Cappa
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * This is the main file for 'app entry-point'.
 * It boots Angular with either `debug` or `prod` configuration.
 */

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from 'environments/environment';

/**
 * App Module
 * our top level module that holds all of our components
 */
import { AppModule } from './app/app.module';

// import * as OfflinePluginRuntime from 'offline-plugin/runtime';
// OfflinePluginRuntime.install({
//   onUpdating: () => {
//     console.log('SW Event:', 'onUpdating');
//   },
//   onUpdateReady: () => {
//     console.log('SW Event:', 'onUpdateReady');
//     // Tells to new SW to take control immediately
//     // runtime.applyUpdate();
//     OfflinePluginRuntime.applyUpdate();
//   },
//   onUpdated: () => {
//     console.log('SW Event:', 'onUpdated');
//     // Reload the webpage to load into the new version
//     // window.location.reload();
//     location.reload();
//   },
//   onUpdateFailed: () => {
//     console.log('SW Event:', 'onUpdateFailed');
//   }
// });

/**
 * Bootstrap our Angular app with a top level NgModule
 */
export function main(): Promise<any> {
  return platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then(environment.decorateModuleRef)
    .catch((err) => console.error(err));
}

/**
 * Needed for hmr
 * in prod this is replace for document ready
 */
switch (document.readyState) {
  case 'loading':
    document.addEventListener('DOMContentLoaded', _domReadyHandler, false);
    break;
  case 'interactive':
  case 'complete':
  default:
    main();
}

function _domReadyHandler() {
  document.removeEventListener('DOMContentLoaded', _domReadyHandler, false);
  main();
}
