angular.module('pet-detective')
  .controller('petFoundFormController', function () {
    console.log('I am petFoundFormController');
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
