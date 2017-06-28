angular.module('pet-detective')
  .controller('dispatchController', function () {
  })
  .directive('dispatch', function dispatchDirective() {
    return {
      scope: {},
      restrict: 'E',
      controller: 'dispatchController',
      controllerAs: 'ctrl',
      bindToController: true,
      templateUrl: 'components/dispatch.html',
    };
  });
