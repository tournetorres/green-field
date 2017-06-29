angular.module('pet-detective')
  .controller('petFoundFormController', function ($http, $window) {
    this.formBody;
    this.address;
    this.type;
    this.found = 'FOUND';

    this.data = {
      singleSelect: null,
      multipleSelect: [],
      option1: 'cat',
      option2: 'dog',
    };
    this.submit = function (address, formBody) {
      console.log(address, formBody);
      $http({
        
        url: '/bulletins',
        method: 'POST',

        data: {
          lostOrFound: this.found,
          type: this.data.singleSelect,
          address,
          message: formBody,
        },

      })
        .then((response) => {
          console.log(response);
          console.log('success');
        },
        (response) => { // optional
          console.log('fail');
        });
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
