angular.module('pet-detective')
  .controller('loginController', function () {
  })
  .directive('login', function () {
    return {
      scope: {},
      restrict: 'E',
      controller: 'loginController',
      controllerAs: 'ctrl',
      bindToController: true,
      templateUrl: '../login.html',
    };
  });
