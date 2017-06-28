
angular.module('pet-detective')
  .controller('staticMapDispatchController', function ($window, $http) {
    this.staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=29.9952,-90.0716&zoom=15&size=555x325&path=weight:3%7Ccolor:blue%7Cenc:{coaHnetiVjM??_SkM??~R&key=${window.STATIC_API_KEY}`;
    $http.get(this.staticMapUrl)
      .then((response) => {
      })
      .catch((err) => {
        console.error(err);
      });
  })
  .directive('staticMapDispatch', function staticMapDispatchDirective() {
    return {
      scope: {
      },
      restrict: 'E',
      controller: 'staticMapDispatchController',
      controllerAs: 'ctrl',
      bindToController: true,
      template: '<img ng-src="{{ctrl.staticMapUrl}}"/>',
    };
  });
