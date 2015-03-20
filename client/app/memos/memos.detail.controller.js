'use strict';

angular.module('seminarJsApp')
  .controller('MemosDetailCtrl', function ($stateParams, $scope, $location, $state, Memos, growl) {
      $scope.memo = {};

    	$scope.save = function () {
        	var successCallback = function(){ 
                $state.go('memos.list');
          };
          var failureCallback = function(response)
          {
            console.log(response);
            if(response.data.errors)
            {
              var message = _.pluck(response.data.errors,'message').join(",")
              growl.error(message);
            }
          };
	        Memos.save($scope.memo, successCallback, failureCallback);
		};
    });