'use strict';

angular.module('ngHelp.contents', [])

.factory('ContentsService', function($timeout, $http) {
    var service = {
        fetch: function() {
            return $timeout(function() {
                return $http.get('./contents/contents.json?v=' + (new Date().getTime())).then(function(response) {
                    return response.data;
                });
            }, 30);
        }
    }

    return service;
  })

  .controller('ContentsController', ['$scope', 'ContentsService', function($scope, ContentsService) {
    $scope.contents = ContentsService.fetch().then(function(contents) {
                    console.log('here');
      $scope.contents = contents;
    });
  }])

  .controller('SectionController', ['$scope', '$route', '$routeParams', function($scope, $route, $routeParams) {
    console.log('Hit the Section Controller');
    $route.current.templateUrl = './p/' + $routeParams.name + ".html?v=" + (new Date().getTime());
  }])

  .directive('nghelpContents', function() {
    return {
      templateUrl: './contents/contents.html',
      restrict: 'E'
    };
  });
