'use strict';

angular.module('seminarJsApp')
  .controller('MemosCtrl', function ($scope, Memos, growl) {
    $scope.memos = Memos.query();


    $scope.delete = function(memo) {
    	Memos.delete({id: memo._id}, function()
    		{
    			_.remove($scope.memos, memo);
    			growl.info('Memo removed');
    		});
    };
  });