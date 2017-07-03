angular.module('pet-detective')
  .factory('fetchCoordsFactory', function ($http) {
    return {
      fetchCoords() {
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
  .controller('fetchCoordsController', function () {

  })
  .directive('fetchCoords', function fetchCoordsDirective() {
    return {
      scope: {
      },
      restrict: 'E',
      controller: 'petFormController',
      controllerAs: 'ctrl',
      bindToController: true,
      template: '<div></div>',
    };
  });
