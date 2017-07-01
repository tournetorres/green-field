angular.module('pet-detective')
  .controller('petFormController', function ($http, $window, formDataFactory) {
    this.formBody;
    this.address;
    this.type;
    this.bulletinData;


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
      this.date = new Date().toString();
      $http({
        url: '/bulletin',
        method: 'POST',

        data: {
          lostOrFound: this.petState.lostOrFound,
          type: this.data.singleSelect,
          address,
          message: formBody,
          date: this.date,
        },

      })
        .then((response) => {
          console.log(response);
          console.log('success');
          return formDataFactory.fetchFormData();
        })
        .then((bulletins) => {
          console.log(bulletins.data);
          this.bulletinData = bulletins.data;
          this.data.singleSelect = null;
          this.petState.lostOrFound = null;
          this.formBody = null;
          this.address = null;
        });

      // (response) => { // optional
      //   console.log('fail');
      // });
    };
  })
  .directive('petForm', function petFormDirective() {
    return {
      scope: {
        bulletinData: '<',
      },
      restrict: 'E',
      controller: 'petFormController',
      controllerAs: 'ctrl',
      bindToController: true,
      templateUrl: 'components/petForm.html',
    };
  });
