'use strict';

// Declare app level module which depends on views, and components
angular.module('ngHelp', [
  'ngRoute',
  'ngHelp.contents'
]).

config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/home', {
          templateUrl: 'partials/welcome.html'
        }).
      when('/sections/:name*', {
            templateUrl: function(urlattr){
                return '/sections/' + urlattr.name + '.html';
            },
            controller: 'SectionController'
        }).
        otherwise({
          redirectTo: '/home'
        });
    }
]);
