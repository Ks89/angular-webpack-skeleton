[![Travis Build](https://travis-ci.org/Ks89/angular-webpack-skeleton.svg?branch=master)](https://travis-ci.org/Ks89/angular-webpack-skeleton)   [![AppVeyor Build](https://ci.appveyor.com/api/projects/status/w96f5qv0rbodqnx1/branch/master?svg=true)](https://ci.appveyor.com/project/Ks89/angular-webpack-skeleton/branch/master)   [![CircleCI Build](https://circleci.com/gh/Ks89/angular-webpack-skeleton/tree/master.svg?style=svg)](https://circleci.com/gh/Ks89/angular-webpack-skeleton/tree/master)   [![Code Climate](https://codeclimate.com/github/Ks89/angular-webpack-skeleton/badges/gpa.svg)](https://codeclimate.com/github/Ks89/angular-webpack-skeleton)   [![CodeClimate Coverage](https://codeclimate.com/github/Ks89/angular-webpack-skeleton/badges/coverage.svg)](https://codeclimate.com/github/Ks89/angular-webpack-skeleton/coverage)   [![Coveralls Coverage](https://coveralls.io/repos/github/Ks89/angular-webpack-skeleton/badge.svg?branch=master)](https://coveralls.io/github/Ks89/angular-webpack-skeleton?branch=master)   [![Known Vulnerabilities](https://snyk.io/test/github/ks89/angular2-webpack2-skeleton/badge.svg)](https://snyk.io/test/github/ks89/angular2-webpack2-skeleton)

<br>

# angular-webpack-skeleton
A simple skeleton project with Angular 5, Webpack 3 and Bootstrap 4 beta ready to use.

You can fork or clone this repository and build your project on it.
I suggest to add this repo as git remote to your repository to be able to update your project with newer releases of this project.

## Features
- Typescript 2
- Angular 5
    - [Ahead of Time (AOT)](https://angular.io/guide/aot-compiler)
    - [Lazy loading](https://angular.io/guide/ngmodule#lazy-loading-modules-with-the-router)
    - The new [HttpClient](https://angular.io/guide/http#httpclient) of Angular >= 4.3
- [Bootstrap 4](http://getbootstrap.com/), [ng-bootstrap](https://github.com/ng-bootstrap/ng-bootstrap), [bootstrap-loader](https://github.com/shakacode/bootstrap-loader)
- [Font-awesome](http://fontawesome.io/)
- [jQuery](https://jquery.com/)
- Reactive storage
    - [@ngrx/store](https://github.com/ngrx/store) >= 4
    - [@ngrx/store-devtools](https://github.com/ngrx/store-devtools) >= 4
- Webpack 3
    - 3 profiles: 'dev', 'prod' and 'prod:aot'
    - [Hot Module Replacement (HMR)](https://webpack.js.org/concepts/hot-module-replacement/)
    - [Dynamically Linked Library (DLL)](https://webpack.js.org/plugins/dll-plugin/)
    - [Tree shaking](https://webpack.js.org/guides/tree-shaking/)
    - [SASS support](https://github.com/webpack-contrib/sass-loader)
    - Multiple entry point with 2 SPAs (Single Page Applications): app and admin
    - [UglifyJs](https://github.com/webpack-contrib/uglifyjs-webpack-plugin) and [Compression plugin](https://github.com/webpack-contrib/compression-webpack-plugin) for production builds
    - [Bundle Analyzer](https://github.com/th0r/webpack-bundle-analyzer)
    - [Visualizer Plugin](https://github.com/chrisbateman/webpack-visualizer)
- Testing
    - Unit testing with [Karma](https://karma-runner.github.io) and [Jasmine](https://jasmine.github.io/)
    - End to end (E2E) testing with [Protractor](http://www.protractortest.org) and [WebDriver JS](https://github.com/SeleniumHQ/selenium/wiki/WebDriverJs)
    - Code coverage with [IstanbulJs](https://github.com/istanbuljs/istanbuljs)
- Code analysis and quality
    - [TSLint](https://github.com/palantir/tslint)
    - [Codelyzer](https://github.com/mgechev/codelyzer)
- Documentation
    - [TypeDoc](https://github.com/TypeStrong/typedoc)
    - [Compodod](https://github.com/compodoc/compodoc)
- Continous Integration
    - [Travis CI](https://travis-ci.org/)
    - [Circle CI](https://circleci.com/)
    - [AppVeyor](https://www.appveyor.com/)
- `manifest.json` support to add it as a standalone app on mobile devices
- and many more...


## News
- *10/06/2017* - Beta 7 - Check [HERE](https://github.com/Ks89/Angular2-webpack2-skeleton/releases)
- *10/05/2017* - Beta 6 - Check [HERE](https://github.com/Ks89/Angular2-webpack2-skeleton/releases)
- *09/22/2017* - Beta 5 - Check [HERE](https://github.com/Ks89/Angular2-webpack2-skeleton/releases)
- *09/18/2017* - Beta 4 - Check [HERE](https://github.com/Ks89/Angular2-webpack2-skeleton/releases)
- *09/17/2017* - Beta 3 - Check [HERE](https://github.com/Ks89/Angular2-webpack2-skeleton/releases)
- *08/11/2017* - Beta 2 - Check [HERE](https://github.com/Ks89/Angular2-webpack2-skeleton/releases)
- *08/10/2017* - Beta 1 - Check [HERE](https://github.com/Ks89/Angular2-webpack2-skeleton/releases)
- *07/27/2017* - Alpha 21 - Check [HERE](https://github.com/Ks89/Angular2-webpack2-skeleton/releases)
- *05/20/2017* - Alpha 20 - Check [HERE](https://github.com/Ks89/Angular2-webpack2-skeleton/releases)
- *04/25/2017* - Alpha 19 - Check [HERE](https://github.com/Ks89/Angular2-webpack2-skeleton/releases)
- *04/23/2017* - Alpha 18 - Check [HERE](https://github.com/Ks89/Angular2-webpack2-skeleton/releases)
- *03/26/2017* - Alpha 17 - Check [HERE](https://github.com/Ks89/Angular2-webpack2-skeleton/releases)
- *03/23/2017* - Alpha 16 - Check [HERE](https://github.com/Ks89/Angular2-webpack2-skeleton/releases)
- *03/05/2017* - Alpha 15 - Check [HERE](https://github.com/Ks89/Angular2-webpack2-skeleton/releases)
- *02/26/2017* - Alpha 14 - Check [HERE](https://github.com/Ks89/Angular2-webpack2-skeleton/releases)
- *02/26/2017* - Alpha 13 - Check [HERE](https://github.com/Ks89/Angular2-webpack2-skeleton/releases)
- *02/26/2017* - Alpha 12 - Check [HERE](https://github.com/Ks89/Angular2-webpack2-skeleton/releases)
- *02/26/2017* - Alpha 11 - Check [HERE](https://github.com/Ks89/Angular2-webpack2-skeleton/releases)
- *02/26/2017* - Alpha 10 - Check [HERE](https://github.com/Ks89/Angular2-webpack2-skeleton/releases)
- *01/30/2017* - Alpha 9 - Check [HERE](https://github.com/Ks89/Angular2-webpack2-skeleton/releases)
- *01/28/2017* - Alpha 8 - Check [HERE](https://github.com/Ks89/Angular2-webpack2-skeleton/releases)
- *01/22/2017* - Alpha 7 - Check [HERE](https://github.com/Ks89/Angular2-webpack2-skeleton/releases)
- *01/21/2017* - Alpha 6 - Check [HERE](https://github.com/Ks89/Angular2-webpack2-skeleton/releases)
- *01/15/2017* - Alpha 5 - Check [HERE](https://github.com/Ks89/Angular2-webpack2-skeleton/releases)


## Changelog
Full changelog [HERE](https://github.com/Ks89/angular-webpack-skeleton/blob/master/CHANGELOG.md)


## File structure
This reduced structure is based on [Angular style-guide](https://angular.io/guide/styleguide) and on my personal experience.
For the full file structure check [HERE](https://github.com/Ks89/angular-webpack-skeleton/blob/master/FILE-STRUCTURE.md).

```
angular-webpack-skeleton/
 ├─assets/                        * Images, icons, manifest.json and so on
 ├─bootstrap/                     * bootstrap-loader configuration files
 │ ├─after.scss                   * this gets loaded after bootstrap/variables is loaded
 │ └─before.scss                  * this gets loaded before bootstrap/variables is loaded
 │
 ├─config/                        * config files
 │ ├─html-elements-plugin/        * webpack plugin to add css, icons... during the creation of html files
 │ ├─head-config.common.js        * list of files to be loaded by 'html-elements-plugin'
 │ ├─helpers.js                   * helper functions for configuration files
 │ ├─karma.conf.js                * karma config file for unit testing
 │ ├─karma-test-runner.js         * karma test-runner file for unit testing
 │ ├─protractor.conf.js           * protractor config for e2e tests
 │ ├─webpack.common.js            * common webpack config (for both dev and prod)
 │ ├─webpack.dev.js               * local developmet webpack config
 │ ├─webpack.prod.js              * production webpack config
 │ └─webpack.test.js              * testing webpack config
 │
 ├─src/                           * mai source folder
 │ ├─admin/                       * source folder of 'admin' SPA. Similar to 'app'
 │ │
 │ ├─app/                         * source folder of 'app' SPA
 │ │ ├─core/                      * CoreModule provides services. You can import this module only on time in the root module
 │ │ │ ├─actions/                 * folder of ngrx actions
 │ │ │ │ └─hello.example.ts       * hello-example ngrx action
 │ │ │ ├─reducers/                * folder of ngrx reducers
 │ │ │ │ └─hello.example.ts       * hello-example ngrx reducer
 │ │ │ ├─services/                * services of the CoreModule
 │ │ │ │ ├─example.service.ts     * example of a synchronous service
 │ │ │ │ ├─github.service.ts      * example of an asynchronous service with HttpClient
 │ │ │ │ └─services.ts            * export an array of services to easely import into the module's definition
 │ │ │ ├─core.module.ts           * definition of the CoreModule
 │ │ │ └─module-import-guard.ts   * guard to prevent multiple import of the CoreModule
 │ │ │
 │ │ ├─pages/                     * pages/features of the 'app' SPA
 │ │ │ ├─404/
 │ │ │ │ └─not-found.component.ts * 404 component shown for route '**'
 │ │ │ ├─home/
 │ │ │ │ ├─home.component.ts      * homepage component shown for route '/'
 │ │ │ │ ├─home.html              * homepage template
 │ │ │ │ └─home.scss              * homepage scss file with local styles
 │ │ │ ├─lazy/                    * lazy loaded module shown for route 'lazy'
 │ │ │ │ ├─actions/               * ngrx actions only for this lazy loaded module
 │ │ │ │ ├─reducers/              * ngrx reducers only for this lazy loaded module
 │ │ │ │ ├─lazy.component.spec.ts * unit test of lazy loaded component
 │ │ │ │ ├─lazy.component.ts      * lazy loaded component
 │ │ │ │ ├─lazy.html              * template of the lazy loaded component
 │ │ │ │ ├─lazy.module.ts         * definition of the lazy loaded module
 │ │ │ │ ├─lazy.routes.ts         * local routes for the lazy loaded module
 │ │ │ │ └─lazy.scss              * lazy loaded module's scss file with local styles
 │ │ │ └─components.ts            * export an array of components to easely import into the module's definition
 │ │ │
 │ │ ├─reducers/                  * define main ngrx reducer for the app SPA
 │ │ │
 │ │ ├─shared/                    * SharedModule provides common components, directives... It can be imported more times also by sub-modules
 │ │ │ ├─components/              * components of the SharedModule
 │ │ │ │ ├─footer/                * footer component
 │ │ │ │ ├─navbar/                * navbar componet
 │ │ │ │ ├─page-header/           * page header component
 │ │ │ │ └─components.ts          * export an array of components to easely import into the module's definition
 │ │ │ └─shared.module.ts         * definition of the SharedModule
 │ │ │
 │ │ ├─app.component.ts           * main component of the app SPA
 │ │ ├─app.e2e.ts                 * example of an e2e test for 'app' SPA
 │ │ ├─app.html                   * main template's component of the app SPA
 │ │ ├─app.module.ts              * root module of the app SPA
 │ │ └─app.routing.ts             * routes of the app SPA
 │ │
 │ ├─styles/                      * root styles (CSS/SCSS) for the entire application (all SPAs)
 │ │ ├─headings.css               * css file (to show that you can use both css and scss)
 │ │ ├─loading.scss               * SCSS loading spinner
 │ │ ├─styles.scss                * main SCSS that imports all other SCSS in this directory (loading ad variables)
 │ │ └─variables.scss             * SCSS variables
 │ │
 │ ├─admin.aot.ts                 * main file to boot 'admin' SPA with AOT compiler
 │ ├─admin.ejs                    * admin template that will be converted into an html (admin SPA)
 │ ├─admin.ts                     * main file to boot 'admin' SPA
 │ ├─environmet.ts                * file to configure Angular debug/prod (don't touch this)
 │ ├─index.ejs                    * index template that will be converted into an html (app SPA)
 │ ├─main.aot.ts                  * main file to boot 'app' SPA with AOT compiler
 │ ├─main.ts                      * main file to boot 'app' SPA
 │ ├─polyfills.ts                 * polyfills used by Angular to support older browsers
 │ └─typings.d.ts                 * custom types for Typescript
 │
 ├─.bootstraprc                   * main bootstrap-loader config file
 ├─karma.conf.js                  * main karma config file for unit testing
 ├─protractor.config.js           * main protractor config file for e2e testing
 ├─tsconfig.json                  * Config file for Typescript
 ├─tsconfig-aot.json              * Config file for Typescript used by AOT compiler
 ├─tslit.json                     * TSLint config file
 └─webpack.conf.js                * main webpack config file
```


## Requirenments
- Nodejs >= 7.10.0 (>= 8.3.0 recommended)
- npm >= 4.2.0 (>= 5.0.0 recommended)

## Install

### Install global dependencies
I created some scripts inside 'setup' folder to initialize the environment.
If you are already ready, you can execute this (`sudo` if you are using macOS):

- `npm install -g lite-server`

### Install local dependencies
- `npm install`

## Build

### Run with webpack-dev-server (developing mode)
- `npm start`

### Build the application in 'dist' folder (debug mode)
- `npm run build:dev`
- `cd dist`
- `lite-server`

### Build the application in 'dist' folder (production mode)
- `npm run build:prod`
- `cd dist`
- `lite-server`

### Build the application in 'dist' folder (production + AOT mode)
- `npm run build:prod:aot`
- `cd dist`
- `lite-server`

## Test

### Test (check coverage/html/index.html with the results)
- `npm test`

### Test e2e with protractor
- `npm run webdriver:update` (if you have problems, try again removing `./node_modules` and executing `npm install`)
- `npm run e2e`

If you have problems with e2e testing, you should downgrade `@types/jasmine` to version `2.5.38`.

## Other

### To generate typescript's documentation with typedocs (check docs/index.html for the result)
- `npm run docs`

### To generate the really cool compodoc's documentation (check documentation/index.html for the result)
- `npm run compodoc`

### To generate webpack bundle's results
- `npm run build:dev` (or `build:prod` or `build:prod:aot`)
- `npm run analyze:bundle`

### To use webpack-visualizer-plugin
- `npm run build:dev` (or `build:prod` or `build:prod:aot`)
- open in your browser `dist/webpack-visualizer-report.html`


## Credits

A special thanks to both [qdouble](https://github.com/qdouble/angular-webpack2-starter) and [AngularClass](https://github.com/AngularClass/angular2-webpack-starter) projects.


## License

**MIT License**

Copyright (c) 2017 **Stefano Cappa**

**This license is valid to all my files in this repo**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

<br/>

**Created by Stefano Cappa**
