angular.module('pet-detective')
  .controller('bulletinBoardController', function () {
    console.log('I am in bulletinBoardController');
  })
  .directive('bulletinBoard', function () {
    return {
      scope: {},
      restrict: 'E',
      controller: 'bulletinBoardController',
      controllerAs: 'ctrl',
      bindToController: true,
    };
  });
