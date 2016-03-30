'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.welcome',
]).

config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("welcome");
  //
  // Now set up the states
  $stateProvider
    .state('welcome', {
      url: "/",
      templateUrl: "welcome/welcome.html"
    })
  });
