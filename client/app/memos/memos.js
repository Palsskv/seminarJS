'use strict';

angular.module('seminarJsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('memos', {
        url: '/',
        templateUrl: 'app/memos/memos.html',
        controller: 'MemosCtrl'
      });
  });
