angular
  .module('starterApp', ['ui.router', 'templates'])
  .config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('/', {
      url: '/index',
      templateUrl: 'index.html',
      controller: 'MainCtrl',
    });

    $urlRouterProvider.otherwise('index');

  }]);
