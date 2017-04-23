# angular-webpack-skeleton
A simple skeleton project to use Angular 4, Webpack2, Bootstrap 4 alpha, ng-bootstrap and bootstrap-loader 2 together

This project is a personal skeleton. If you want to use it feel free to fork it.
I share this with you as it is.

Project renamed to "angular-webpack-skeleton"

## News
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

#### Alpha 18
- update to codelyzer 3
- update to tslint 5
- update to ngc-webpack 2
- polyfills.ts taken from angular-cli's default project
- temporary fix for e2e test (issue #32) but I'm waiting for a real solution
- fix IE performance issue with debug mode (issue #34)

#### Alpha 17
- angular 4.0.0
- project renamed to "angular-webpack-skeleton"

#### Alpha 16
- angular 4 rc 5 (no rc.6 because it's broken)

#### Alpha 15
- angular 4 rc 2
- Webpack DLL plugin

#### Alpha 14
- font-awesome fixed

#### Alpha 13
- big refactoring to both app and admin single page applications

#### Alpha 12
- Fix for AppVeyor and Windows
- Bootstrap 4 customizations thanks to bootstrap-loader. In fact, I'm overriding bootstrap colors with different hex colors. The same technique is valid for all variables into [_variables.scss](https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss)

#### Alpha 11
- MIT license :)

#### Alpha 10
- typescript 2.2
- big refactoring
- some fixes related to both css and scss webpack's loaders
- fix for e2e tests (issue #12)

#### Alpha 9
- typescript 2.1
- awesome-typescript-loader 3.0.0 beta

#### Alpha 8
- improve npm scripts names #15
- remove ./node_modules/.bin from npm scripts #13

#### Alpha 7
- AOT + Lazy Loading together (thanks to `ng-router-loader`)

#### Alpha 6
- AOT #9

#### Alpha 5
- HMR
- Lazy Loading
- Tree Shaking (with webpack2 and not with rollup)
- Third party services as codeclimate, appveyor, travis ci and coveralls
- Massive refactoring


## Install global dependencies
I created some scripts inside 'setup' folder to initialize the environment.
If you are already ready, you can execute this (`sudo` if you are using macOS):

- `npm install -g lite-server`

## Install local dependencies
- `npm install`

## Run with webpack-dev-server (developing mode)
- `npm start`

## Build the application in 'dist' folder (debug mode)
- `npm run build:dev`
- `cd dist`
- `lite-server`

## Build the application in 'dist' folder (production mode)
- `npm run build:prod`
- `cd dist`
- `lite-server`

## Build the application in 'dist' folder (production + AOT mode)
- `npm run build:prod:aot`
- `cd dist`
- `lite-server`

## Test (check coverage/html/index.html with the results)
- `npm test`

## Test e2e with protractor
- `npm run webdriver:update` (if you have problems, try again removing `./node_modules` and executing `npm install`)
- `npm run e2e`

## To generate typescript's documentation (check docs/index.html with the result)
- `npm run docs`

I have to write the documentation, but this project is ready to use typedocs


## To generate webpack bundle's results
- `npm run build:dev` (or `build:prod` or `build:prod:aot`)
- `npm run analyze:bundle`


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
