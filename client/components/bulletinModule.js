angular.module('pet-detective')
  .controller('bulletinModuleController', function () {
    console.log('I am in bulletinModuleController');
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
