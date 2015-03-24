'use strict';

angular.module('seminarJsApp')
.config(["$urlRouterProvider", function(urlRouterProvider) {
  urlRouterProvider.deferIntercept();
}]);
