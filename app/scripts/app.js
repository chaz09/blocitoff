var blocitoff = angular.module('blocitoff', ['firebase']);
blocitoff.controller('TodoCtrl', function TodoCtrl($scope, $firebase) {
  $scope.tasks = [];
        $scope.add = function() {
            $scope.tasks.push($scope.title);
            $scope.title = ''
        }

    $scope.delete = function() {
        $scope.tasks.pop($scope.title);

      }
  })
