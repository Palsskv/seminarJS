'use strict';

angular.module('seminarJsApp')
	.factory('Memos', ['$resource', function($resource) {
		return $resource('/api/memos/:id', {
		      id: '@_id'
		    },
		    {
		        'update': { method:'PUT' }
		    });
	}]);