angular.module('pet-detective', [])
  .controller('appController', function () {
    console.log('I am in appController');
  })
  .directive('app', function () {
    return {
      scope: {},
      restrict: 'E',
      controller: 'appController',
      controllerAs: 'ctrl',
      bindToController: true,
    };
  });
