'use strict';

describe('Controller: MemosCtrl', function () {

  // load the controller's module
  beforeEach(module('seminarJsApp'));

  var MemosCtrl, scope, $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/memos')
      .respond([{_id: '19239213daef', markup: 'lorem ipsum'}, {_id: '192fead213daef', markup: '2'}]);

    scope = $rootScope.$new();
    MemosCtrl = $controller('MemosCtrl', {
      $scope: scope
    });
  }));

  it('should load all memos into scope', function (){
    $httpBackend.flush();
    expect(scope.memos.length).toBe(3);
  });
});