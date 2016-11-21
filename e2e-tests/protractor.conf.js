//jshint strict: false
var HierarchicalHTMLReporter = require('protractor-html-hierarchical-reporter');

exports.config = {

  allScriptsTimeout: 11000,
  
  seleniumAddress: 'http://localhost:8000/',

  specs: ['./*.js'],

  capabilities: {
    'browserName': 'chrome'
  },
  
  baseUrl: 'http://localhost:8000/',

  framework: 'jasmine',
  

  directConnect: true,

  
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  
  onPrepare: function() {
      jasmine.getEnv().addReporter(
        new HierarchicalHTMLReporter({
          savePath: './screens/'
        })
      );
   }

  
};
