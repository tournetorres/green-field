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
          },
          (response) => { // optional
            console.log('fail');
          });
      },
    };
  })
  .controller('formDataController', function () {

  })
  .directive('fetchFormData', function fetchFormDataDirective() {
    return {
      scope: {
      },
      restrict: 'E',
      controller: 'formDataController',
      controllerAs: 'ctrl',
      bindToController: true,
      templateUrl: 'components/fetchFormData.html',
    };
  });
