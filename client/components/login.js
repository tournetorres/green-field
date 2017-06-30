angular.module('pet-detective')
  .controller('loginController', function ($window) {
    this.runner = $window.user;
    window.runner = 0;
    // do post request
    // in the gsign div on datasuccess save id token to the database
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
