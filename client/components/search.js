angular.module('pet-detective')
  .controller('searchController', function ($http, $window) {
    this.zip;

    this.getBulletinModulesByZip = function (zip) {
      
    };
  })
  .directive('search', function searchDirective() {
    return {
      scope: {},
      restrict: 'E',
      controller: 'searchController',
      controllerAs: 'ctrl',
      bindToController: true,
      templateUrl: 'components/search.html',
    };
  });
