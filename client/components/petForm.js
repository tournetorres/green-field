angular.module('pet-detective')
  .controller('petFormController', function ($http, $window, formDataFactory) {
    this.formBody;
    this.address;
    this.type;

    this.data = {
      singleSelect: null,
      multipleSelect: [],
      option1: 'Cat',
      option2: 'Dog',
    };

    this.petState = {
      lostOrFound: null,
      multipleSelect: [],
      option1: 'Lost',
      option2: 'Found',
    };


    this.submit = function (address, formBody) {
      $http({
        url: '/bulletin',
        method: 'POST',

        data: {
          lostOrFound: this.petState.lostOrFound,
          type: this.data.singleSelect,
          address,
          message: formBody,
        },

      })
        .then((response) => {
          console.log(response);
          console.log('success');
          return formDataFactory.fetchFormData();
        })
        .then((bulletins) => {
          console.log(bulletins);
        });

      // (response) => { // optional
      //   console.log('fail');
      // });
    };
  })
  .directive('petForm', function petFormDirective() {
    return {
      scope: {

      },
      restrict: 'E',
      controller: 'petFormController',
      controllerAs: 'ctrl',
      bindToController: true,
      templateUrl: 'components/petForm.html',
    };
  });
