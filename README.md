# Angular4-webpack2-skeleton
A simple skeleton project to use Angular4, Webpack2, Boostrap 4 alpha and bootstrap-loader 2 beta together


I created this project as an example for this issue: https://github.com/shakacode/bootstrap-loader/issues/191#issuecomment-256352654
After that, I decided to update it based on https://github.com/Ks89/My-MEAN-website-client
And I created some branches for this issue: https://github.com/ampedandwired/html-webpack-plugin/issues/481

This project is a personal skeleton. If you want to use it feel free to fork it.
I share this with you as it is.

I'll update this project in the future and I'll change the name to another one when Angular4 will be released.


## Install global dependencies
I created some scripts inside 'setup' folder to initialize the environment.
If you are already ready, you can execute this (for macOS):

- sudo npm install -g karma-cli
- sudo npm install -g webpack
- sudo npm install -g typescript
- sudo npm install -g typings
- sudo npm install -g remap-istanbul
- sudo npm install -g webdriver-manager
- sudo npm install -g protractor
- sudo npm install -g istanbul

PS: please be careful about versions, in particular of webpack, remap-istanbul and typescript.
Check in my packages.json which versions I'm using to prevent problems.

## Install local dependencies
`npm install`

## Run with webpack-dev-server (developing mode)
`npm start`

## Build the application in 'dist' folder (debug mode)
`npm run buildDev`

## Build the application in 'dist' folder (production mode)
`npm run build`

## Test (check coverage/html/index.html with the results)
`npm test`

## Test e2e with protractor
broken with Angular4 (It require 2.x.x, at the moment), please be patient :(


## License

Copyright 2016 Stefano Cappa

**This license is valid to all my files in this repo**

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

<br/>
**Created by Stefano Cappa**
