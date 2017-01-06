angular.module('HelloApp', [])
      .controller('HelloController', function($scope) {
          $scope.NameChange = function () {
              $scope.greeting = "Hello " + $scope.name;
          };
      });