(function() {
  function config($stateProvider, $locationProvider, $urlRouterProvider) {
    // $locationProvider
    //   .html5Mode ({
    //     enabled: true,
    //     requireBase: false
    //   });

      $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home/_home.html',
        // controller: 'MainCtrl',
      })

      .state('about', {
        url: '/about',
        tempalteUrl: 'about/_about.html',
      })

      .state('blog', {
        url: '/blog',
        templateUrl: 'blog/_blog.html',
      })

      .state('signupLogin', {
        url: '/signup-login',
        templateUrl: 'auth/_signup-login.html',
      })

      .state('login', {
        url: '/login',
        templateUrl: 'auth/_login.html',
      })

      .state('lostPwd', {
        url: '/lost-pwd',
        templateUrl: 'auth/_lost-pwd.html',
      })

      .state('signup', {
        url: '/signup',
        templateUrl: 'auth/_signup.html',
      })

      .state('productGridColFilter', {
        url: '/product-grid-3-col-filter',
        templateUrl: 'product/_product-grid-3-col-filter.html',
      })

      .state('productGridLeftSidebar', {
        url: '/product-grid-left-sidebar',
        templateUrl: 'product/_product-grid-left-sidebar.html',
      })

      .state('singleProduct', {
        url: '/single-product',
        templateUrl: 'product/_single-product.html',
      })

      .state('cart', {
        url: '/cart',
        templateUrl: 'cart/_cart.html',
      })

      .state('accountAddress', {
        url: '/account-address',
        templateUrl: 'account/_account-address.html',
      })

      .state('accountAllOrders', {
        url: '/account-all-orders',
        templateUrl: 'account/_account-all-orders.html',
      })

      .state('accountDashboard', {
        url: '/account-dashboard',
        templateUrl: 'account/_account-dashboard.html',
      })

      .state('accountProfile', {
        url: '/account-profile',
        templateUrl: 'account/_account-profile.html',
      })

      .state('accountSingleOrder', {
        url: '/account-single-order',
        templateUrl: 'account/_account-single-order.html',
      })

      .state('accountWishlist', {
        url: '/account-wishlist',
        templateUrl: 'account/_account-wishlist.html',
      })

      .state('termsConditions', {
        url: '/terms-conditions',
        templateUrl: 'termsconditions/_terms-conditions.html',
      })

      .state('privacyPolicy', {
        url: '/privacy-policy',
        templateUrl: 'privacypolicy/_privacy-policy.html',
      });

      $urlRouterProvider.otherwise('home');
  }

angular
  .module('furnitureHub', ['templates', 'ui.router'])
  .config(config);

})();
