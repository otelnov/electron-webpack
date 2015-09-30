let ngModule = angular.module('app', ['ui.router']);

ngModule.config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('app', {
        abstract: true,
        template: '<layout></layout>'
      })
      .state('app.main', {
        url: '/',
        template: '<main></main>'
      })
      .state('app.hello', {
        url: '/hello',
        template: '<hello></hello>'
      });
  }
]);

require('./assets/styles.css');
require('./components/common/layout.js')(ngModule);
require('./components/main/main.js')(ngModule);
require('./components/hello/hello.js')(ngModule);

let fs = require('fs');
console.log(fs.readdirSync('./'));

angular.bootstrap(document, ['app']);
