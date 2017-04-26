[![Travis Build](https://travis-ci.org/Ks89/angular-webpack-skeleton.svg?branch=master)](https://travis-ci.org/Ks89/angular-webpack-skeleton)   [![AppVeyor Build](https://ci.appveyor.com/api/projects/status/w96f5qv0rbodqnx1/branch/master?svg=true)](https://ci.appveyor.com/project/Ks89/angular-webpack-skeleton/branch/master)   [![Code Climate](https://codeclimate.com/github/Ks89/angular-webpack-skeleton/badges/gpa.svg)](https://codeclimate.com/github/Ks89/angular-webpack-skeleton)   [![CodeClimate Coverage](https://codeclimate.com/github/Ks89/angular-webpack-skeleton/badges/coverage.svg)](https://codeclimate.com/github/Ks89/angular-webpack-skeleton/coverage)   [![Coveralls Coverage](https://coveralls.io/repos/github/Ks89/angular-webpack-skeleton/badge.svg?branch=master)](https://coveralls.io/github/Ks89/angular-webpack-skeleton?branch=master)   [![Known Vulnerabilities](https://snyk.io/test/github/ks89/angular2-webpack2-skeleton/badge.svg)](https://snyk.io/test/github/ks89/angular2-webpack2-skeleton)

<br>

# angular-webpack-skeleton
A simple skeleton project to use Angular 4, Webpack2, Bootstrap 4 alpha, ng-bootstrap and bootstrap-loader 2 together

This project is a personal skeleton. If you want to use it feel free to fork it.
I share this with you as it is.

Project renamed to "angular-webpack-skeleton"

## News
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
