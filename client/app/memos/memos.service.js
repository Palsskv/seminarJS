'use strict';

angular.module('seminarJsApp')
	.factory('Memos', ['$resource', function($resource) {
		return $resource('/api/memos/:id', null,
		    {
		        'update': { method:'PUT' }
		    });
	}]);