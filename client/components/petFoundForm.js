angular.module('pet-detective')
  .controller('petFoundFormController', function ($http, $window) {
    this.formBody;
    this.address;
    this.type;
    this.found = 'FOUND';
    console.log('inside');

    this.data = {
      singleSelect: null,
      multipleSelect: [],
      option1: 'cat',
      option2: 'dog',
    };
    console.log(this.data.singleSelect);
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
