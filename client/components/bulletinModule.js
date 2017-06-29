angular.module('pet-detective')
  .controller('bulletinModuleController', function () {
    // fetchForm.fetchLostFormData();
    // fetchForm.fetchFoundFormData();
  })
  .directive('bulletinModule', function () {
    return {
      scope: {},
      restrict: 'E',
      controller: 'bulletinModuleController',
      controllerAs: 'ctrl',
      bindToController: true,
      templateUrl: 'components/bulletinModule.html',
    };
  });
