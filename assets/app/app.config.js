myApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("error");
  //
  // Now set up the states
  $stateProvider
    .state('forecast', {
      url: "/forecast",
      templateUrl: "/assets/app/templates/forecast.html"
    })