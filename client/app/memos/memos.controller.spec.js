'use strict';

describe('Controller: MemosCtrl', function () {

  // load the controller's module
  beforeEach(module('seminarJsApp'));

  var MemosCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MemosCtrl = $controller('MemosCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
