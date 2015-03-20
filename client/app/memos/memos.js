'use strict';

angular.module('seminarJsApp')
  .config(function ($stateProvider) {
      $stateProvider.state('memos', {
	        abstract: true,
	        template: '<ui-view/>'
	    })
	     .state('memos.list', {
	        url: '/',
	        templateUrl: 'app/memos/memos.html',
	        controller: 'MemosCtrl'
	      })
	      .state('memos.create', {
	      	url: '/create',
	      	templateUrl: 'app/memos/memos.detail.html',
	        controller: 'MemosDetailCtrl'
	      });
  });
