angular.module('pet-detective')
  .factory('formDataFactory', function ($http) {
    return {
      fetchFormData() {
        return $http({
          url: '/bulletin',
          method: 'GET',
        })
          .then((response) => {
            return response;
            console.log(response);
            console.log('success s');
          },
          (response) => { // optional
            console.log('fail');
          });
      },
    };
  })
  .controller('formDataController', function () {


    //   .success(function (bulletins) { this.bulletins = bulletins; });
    // console.log(this.bulletins);
  })
  .directive('fetchFormData', function fetchFormDataDirective() {
    return {
      scope: {
        formDataFactory: '@',
      },
      restrict: 'E',
      factory: 'formDataFactory',
      controller: 'formDataController',
      controllerAs: 'ctrl',
      bindToController: true,
      template: '<div></div>',
    };
  });
