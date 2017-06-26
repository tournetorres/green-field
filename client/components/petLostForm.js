angular.module('pet-detective')
  .controller('petLostFormController', function () {

  })
  .directive('petLostForm', function () {
    return {
      scope: {},
      restrict: 'E',
      controller: 'petLostFormController',
      controllerAs: 'ctrl',
      bindToController: true,
    };
  });
