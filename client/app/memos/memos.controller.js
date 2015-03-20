'use strict';

angular.module('seminarJsApp')
  .controller('MemosCtrl', function ($scope, Memos) {
    $scope.memos = Memos.query();
  });
