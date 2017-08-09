angular.module('pet-detective', ['google.places'])
  .controller('appController', function () {
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
