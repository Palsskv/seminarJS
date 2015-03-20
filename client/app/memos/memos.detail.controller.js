'use strict';

angular.module('seminarJsApp')
  .controller('MemosDetailCtrl', function ($stateParams, $scope, $location, $state, Memos) {
      $scope.memo = {};

    	$scope.save = function () {
        	var cb = function(){$state.go('memos.list');};
          
	        Memos.save($scope.memo, cb);
		};
    });