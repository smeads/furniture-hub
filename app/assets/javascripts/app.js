angular
  .module('furnitureHub', ['templates', 'ui.router'])
  .config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home/_home.html',
      // controller: 'MainCtrl',
    });

    $urlRouterProvider.otherwise('home');
  }]);
