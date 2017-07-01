angular.module('pet-detective', [])
  .controller('appController', function (formDataFactory) {
    this.load = function () {
      return formDataFactory.fetchFormData();
    };
    this.load();
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
