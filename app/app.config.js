angular
  .module('mySandbox')
  .run(['$rootScope', '$location', '$window', function($rootScope, $location, $window){
     $rootScope
        .$on('$stateChangeSuccess',
            function(event){
 
                if (!$window.ga)
                    return;
                console.log($location.path())
                $window.ga('send', 'pageview', { page: $location.path() });
        });
}]);




angular
    .module('mySandbox')
    .config(configure);

configure.$inject = ['$stateProvider', '$urlRouterProvider'];

function configure($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'modules/checkout/views/checkout.index.html'
        });

    $stateProvider
        .state('step1', {
            url: '/step1',
            templateUrl: 'modules/checkout/views/step1.html'
        });

    $stateProvider
        .state('step2', {
            url: '/step2',
            templateUrl: 'modules/checkout/views/step2.html'
        });
    $stateProvider
        .state('step3', {
            url: '/step3',
            templateUrl: 'modules/checkout/views/step3.html'
        });

    $stateProvider
        .state('home2', {
            url: '/home2',
            templateUrl: 'modules/checkout/views/versao2/checkout.index.html'
        });

    $stateProvider
        .state('step12', {
            url: '/step12',
            templateUrl: 'modules/checkout/views/versao2/step1.html'
        });

    $stateProvider
        .state('step22', {
            url: '/step22',
            templateUrl: 'modules/checkout/views/versao2/step2.html'
        });
    $stateProvider
        .state('step32', {
            url: '/step32',
            templateUrl: 'modules/checkout/views/versao2/step3.html'
        });

    
};
