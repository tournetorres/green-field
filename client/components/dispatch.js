angular.module('pet-detective')
  .controller('dispatchController', function () {
    console.log('I am in dispatchController');
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
