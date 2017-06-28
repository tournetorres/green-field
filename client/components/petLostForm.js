angular.module('pet-detective')
  .controller('petLostFormController', function ($http, $window) {
    this.formBody;
    this.address;
    this.type;
    this.lost = 'LOST';
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
  .directive('petLostForm', function petLostFormDirective() {
    return {
      scope: {},
      restrict: 'E',
      controller: 'petLostFormController',
      controllerAs: 'ctrl',
      bindToController: true,
      templateUrl: 'components/petLostForm.html',
    };
  });
