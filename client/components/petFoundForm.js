angular.module('pet-detective')
  .controller('petFoundFormController', function () {

  })
  .directive('petFoundForm', function () {
    return {
      scope: {},
      restrict: 'E',
      controller: 'petFoundFormController',
      controllerAs: 'ctrl',
      bindToController: true,
    };
  });
