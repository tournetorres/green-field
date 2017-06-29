angular.module('pet-detective')
  .controller('petLostFormController', function ($http, $window) {
    this.formBody;
    this.address;
    this.type;
    this.lost = 'LOST';

    this.data = {
      singleSelect: null,
      multipleSelect: [],
      option1: 'cat',
      option2: 'dog',
    };
    this.submit = function (type, address, formBody) {
      $http({
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
        url: '/lostbulletin',
        method: 'POST',

        data: {
          lostOrFound: this.lost,
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
