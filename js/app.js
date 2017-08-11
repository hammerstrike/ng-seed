angular
  .module('app', [
    'ui.router',
    'oc.lazyLoad',
    'angular-loading-bar'
  ])
  .config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
  }])
  .run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
    $rootScope.$on('$stateChangeSuccess', function () {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
    $rootScope.$state = $state;
    return $rootScope.$stateParams = $stateParams;
  }]);