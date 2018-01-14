
blocitoff.controller ('HomeCtrl',["scope", "$firebaseObject", "$firebaseArray",
function($scope, $firebaseArray ) {

  	$scope.firebase = new Firebase('https://blocitoff-d41dd.firebaseio.com');
  	 $scope.tasks = $firebaseArray;

  	$scope.addTask = function() {
        $scope.tasks.$add({
  			name: $scope.newTaskName;
  		});
    }

      $scope.removeTask = function (task) {
        tasks.remove(task)
      }

      angular
            .module('blocitoff')
            .controller('HomeCtrl', [HomeCtrl]);
    })();


  	};
