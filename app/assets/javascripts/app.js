angular
  .module('starterApp', ['templates', 'ui.router'])
  .config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home.html',
      // controller: 'MainCtrl',
    });

    // console.log('yoyo')

    $urlRouterProvider.otherwise('/home');
  }]);
