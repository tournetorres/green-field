angular.module('pet-detective')
  .controller('petFoundFormController', function () {
    this.formBody;
    this.address;
    this.type;
    this.found = 'FOUND';
    console.log('inside');

    this.submit = function ($http) {
      
    };
  })
  .directive('petFoundForm', function petFoundFormDirective() {
    return {
      scope: {

      },
      restrict: 'E',
      controller: 'petFoundFormController',
      controllerAs: 'ctrl',
      bindToController: true,
      templateUrl: 'components/petFoundForm.html',
    };
  });
