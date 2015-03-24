// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html
var wiredep = require("wiredep");
var path = require("path");

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    files: wiredep({devDependencies: true}).js.map (function(file)
    {
       return path.relative(process.cwd(), file).replace(/\\/g, '/');
     }).concat(['client/app/app.js',
      'client/test/**/*.js',
      'client/app/**/*.js',
      'client/components/**/*.js',
      'client/app/**/*.html',
      'client/components/**/*.html']),

    preprocessors: {
      '**/*.html': 'html2js',
    },
    plugins: [ 
  'karma-phantomjs-launcher', 
  'karma-chrome-launcher',
  'karma-jasmine', 
  'karma-ng-html2js-preprocessor' 
], 


ngHtml2JsPreprocessor: { 
  stripPrefix: 'client/', 
  moduleName: 'compiledTemplates' 
},
    // list of files / patterns to exclude
    exclude: ['client/bower_components/angular-scenario/angular-scenario.js'],

    // web server port
    port: 9312,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_WARN,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
