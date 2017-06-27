angular.module('pet-detective')
  .controller('petLostFormController', function () {
    this.formBody;
    this.address;
    this.type;
    this.lost = 'LOST';
    console.log('inside');

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
