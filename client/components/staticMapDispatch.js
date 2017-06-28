
angular.module('pet-detective')
  .controller('staticMapDispatchController', function ($window, $http) {
    console.log('this is staticmapdispatch');
    let key = 'AIzaSyBKXktrYeZhUF70D5EPOA8N0trUz-xnDCg';
    this.staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=47.5952,-122.3316&zoom=15&size=640x400&path=weight:3%7Ccolor:blue%7Cenc:{coaHnetiVjM??_SkM??~R&key=${key}`;
    $http.get(this.staticMapUrl)
      .then((response) => {
        // console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  })
  .directive('staticMapDispatch', function staticMapDispatchDirective() {
    return {
      scope: {},
      restrict: 'E',
      controller: 'staticMapDispatchController',
      controllerAs: 'ctrl',
      bindToController: true,
      template: '<div>poop</div>',
    };
  });
