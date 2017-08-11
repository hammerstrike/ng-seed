angular
.module('app')
.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider',function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

  $urlRouterProvider.otherwise('/page1');

  $ocLazyLoadProvider.config({
    // Set to true if you want to see what and when is dynamically loaded
    debug: true
  });


  $stateProvider
  .state('app', {
    abstract: true,
    templateUrl: 'views/common/layouts/master.html'
  })
  .state('app.page1', {
    url: '/page1',
    templateUrl: 'views/page1.html',      
    resolve: {      
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {        
        return $ocLazyLoad.load({
          files: ['js/controllers/page1.js']
        });
      }]
    }
  })
  .state('app.page2', {
    url: '/page2',
    templateUrl: 'views/page2.html',   
    resolve: {      
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {        
        return $ocLazyLoad.load({
          files: ['js/controllers/page2.js']
        });
      }]
    }
  })

  .state('appSimple', {
    abstract: true,
    templateUrl: 'views/common/layouts/general.html'
  })

  // Additional Pages
  .state('appSimple.login', {
    url: '/login',
    templateUrl: 'views/pages/login.html'
  })
  .state('appSimple.register', {
    url: '/register',
    templateUrl: 'views/pages/register.html'
  })
  .state('appSimple.404', {
    url: '/404',
    templateUrl: 'views/pages/404.html'
  })
  .state('appSimple.500', {
    url: '/500',
    templateUrl: 'views/pages/500.html'
  })
}]);
