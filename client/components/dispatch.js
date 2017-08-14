angular.module('pet-detective')
  .controller('dispatchController', function ($window, formDataFactory) {
    this.profileInfo = JSON.parse(localStorage.getItem('userProfile'));
    this.profileName = this.profileInfo.ofa;
    this.storage = [];
    this.information = formDataFactory.fetchFormData();
    this.information.then(response => response.forEach((info) => {
      this.storage.push(info);
    }));
  })
  .directive('dispatch', function dispatchDirective() {
    return {
      scope: {},
      restrict: 'E',
      controller: 'dispatchController',
      controllerAs: 'ctrl',
      bindToController: true,
      templateUrl: 'components/dispatch.html',
    };
  });
