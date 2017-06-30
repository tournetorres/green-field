angular.module('pet-detective')
  .controller('bulletinBoardController', function () {
 
  })
  .directive('bulletinBoard', function () {
    return {
      scope: {},
      restrict: 'E',
      controller: 'bulletinBoardController',
      controllerAs: 'ctrl',
      bindToController: true,
      templateUrl: 'components/bulletinBoard.html',
    };
  });
