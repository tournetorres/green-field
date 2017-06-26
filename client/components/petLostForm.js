angular.module('pet-detective')
  .controller('petLostFormController', function () {
    console.log('I am petLostFormController');
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
