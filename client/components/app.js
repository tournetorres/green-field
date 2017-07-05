angular.module('pet-detective', ['google.places'])
  .controller('appController', function ($window) {
    console.log(localStorage.getItem('userProfile'), 'localStorage');
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
