angular.module('pet-detective')
  .controller('bulletinModuleController', function () {

  })
  .directive('bulletinModule', function () {
    return {
      scope: {},
      restrict: 'E',
      controller: 'bulletinModuleController',
      controllerAs: 'ctrl',
      bindToController: true,
    };
  });
