# formfiller
a web app designed to simplify the process of filling out repetitive data in forms

# Installation
- clone repo
- install nodejs
- install Mongo DB

once installed make sure npm and node are in your path, then run these commands
```
npm install -g gulp bower
npm install
bower install
```
you're all set!

commands to run the app
## Gulp tasks

* `gulp` or `gulp build` to build an optimized version of your application in `/dist`
* `gulp serve` to launch a browser sync server on your source files
* `gulp serve:dist` to launch a server on your optimized application
* `gulp test` to launch your unit tests with Karma
* `gulp test:auto` to launch your unit tests with Karma in watch mode
* `gulp protractor` to launch your e2e tests with Protractor
* `gulp protractor:dist` to launch your e2e tests with Protractor on the dist files
