#### Beta 10
##### Features
- #43 ServiceWorker + AppCache support to build an Offline application

##### Bugfixes
- #53 temporary workaround also for AOT to fix: "typedocs error: Interface 'AbstractExtendedWebDriver' incorrectly extends interface 'ExtendedWebDriver'". Waiting for a solution [here](https://github.com/angular/protractor/issues/4361)

##### Recator
- #56 move all e2e tests into ./e2e


#### Beta 9
##### Features
- #47 add sonarqube + sonarcloud 6.x support


#### Beta 8
##### Bugfixes
- #53 temporary workaround to fix: "typedocs error: Interface 'AbstractExtendedWebDriver' incorrectly extends interface 'ExtendedWebDriver'". Waiting for a solution [here](https://github.com/angular/protractor/issues/4361)


#### Beta 7
##### Features
- add compodoc support #50


#### Beta 6
##### Bugfixes
- fix e2e tests on Windows. There are also some improvements for all other platforms
- fix e2e for CI (not for CircleCI, because I'm waiting for [THIS](https://discuss.circleci.com/t/update-chrome-to-version-59-or-greater-for-circleci-2-0/16323))


#### Beta 5
##### Features
- add e2e tests to CI #46
- add manifest.json to create standalone apps on mobile devices #48


#### Beta 4
##### Features
- refactoring and cleanup
- fix some tslint's rules
- Upgrade to Angular 5.0.0 beta-7
- Upgrade to Typescript 2.4.2
- Remove deprecated @angularclass/idle-preload
- Remove PhantomJs. Now I'm using Chrome Headless :)


#### Beta 3
##### Features
- refactoring and cleanup
- Improved e2e testing


#### Beta 2
##### Features
- #44 update to angular 5 beta
- #45 update to bootstrap 4 beta 1


#### Beta 1
##### Features
- #41 Add autodll-webpack-plugin instead of the other plugin
- #42 circle ci 2
- #40 support e2e testing with Headless Chrome

##### Chores
- #22 write project documentation
- #21 add docs + example for typedocs


#### Alpha 21
- Angular 4.3 and other dependencies updated
- Example of a real rest call to Github from a service using the new Angular's HttpClient #38
- Webpack 3.x.x
- Update to ngrx platform 4 #39
- initial impl of 'add docs + example for typedocs' #21
- fix again e2e testing error (@types/jasmine downgraded) #32


#### Alpha 20
- ngrx-store #24
- fixed deprecated templates preventing page render #35 (thanks to @joshuaharrison)
- bug fix: loading spinner not displayed correctly #25
- webpack-visualizer-plugin (check README.md for mor info)
- examples of *ngIf and *ngFor in home.html
- CI services: AppVeyor, TravisCI and CircleCI
- Other services: Coveralls and CodeClimate
- add badges in readme.md #30
- ng-bootstrap alpha 25
- enabled all imports in polyfills to support older browsers


#### Alpha 19
- full refactoring based on [Angular Style Guide](https://angular.io/styleguide), finally with CoreModule and SharedModule following all best practices


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