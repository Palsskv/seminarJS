'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('seminarJsApp'));

  var MainCtrl,
      scope,
      httpMock;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($httpBackend, $controller, $rootScope) {
    httpMock = $httpBackend;
    httpMock.expectGET('/api/things')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of things to the scope', function () {
    httpMock.flush();
    expect(scope.awesomeThings.length).toBe(4);
  });
});
