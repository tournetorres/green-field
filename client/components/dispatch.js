angular.module('pet-detective')
  .controller('dispatchController', function (formDataFactory) {
    this.storage = [];
    this.information = formDataFactory.fetchFormData();
    this.information.then(response => response.forEach((info) => {
      this.storage.push(info);
      console.log(this.storage, 'sy');
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
