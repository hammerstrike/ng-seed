angular
  .module('app', [
    'ui.router',
    'ui.bootstrap',
    'oc.lazyLoad',
    'angular-loading-bar'
  ])
  .config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
  }])
  .run(['$rootScope', '$state', '$stateParams','$transitions','SpinnerService', function ($rootScope, $state, $stateParams,$transitions,SpinnerService) {

    $transitions.onStart( {}, function(transition,trans) {
      //$rootScope.$broadcast('StateChange', { stateInfo : transition.router.stateService });
    });
    
    $transitions.onFinish( {}, function(transition,trans) {
     //console.log(transition.$to());
      $rootScope.$broadcast('StateChange', { stateInfo : transition.$to() });
    });


    $rootScope.$state = $state;
    return $rootScope.$stateParams = $stateParams;
  }]);