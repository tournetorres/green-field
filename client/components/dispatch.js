angular.module('pet-detective')
  .controller('dispatchController', function () {

  })
  .directive('dispatch', function () {
    return {
      scope: {},
      restrict: 'E',
      controller: 'dispatchController',
      controllerAs: 'ctrl',
      bindToController: true,
    };
  });
