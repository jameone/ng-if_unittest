//jshint strict: false
module.exports = function(config) {
  config.set({

    preprocessors: {
      '**/*.html': ['ng-html2js']
    },

    basePath: './app',

    files: [
      'lib/angular/angular.js',
      'lib/angular-route/angular-route.js',
      '../node_modules/angular-mocks/angular-mocks.js',
      'core/**/*.js',
      'view*/**/*.js',
      '**/*.html'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-ng-html2js-preprocessor'
    ],

    ngHtml2JsPreprocessor: {
      // strip this from the file path
      // stripPrefix: '',
      // create a single module that contains templates from all the files
      moduleName: 'myApp.templates'
    },


  });
};
