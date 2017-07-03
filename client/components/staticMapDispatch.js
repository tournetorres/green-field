
angular.module('pet-detective')
  .controller('staticMapDispatchController', function () {
    // NgMap.getMap().then(function (map) {
    //   console.log(map.getCenter());
    //   console.log('markers', map.markers);
    //   console.log('shapes', map.shapes);
    // });
  })
  .directive('staticMapDispatch', function staticMapDispatchDirective() {
    return {
      scope: {
      },
      restrict: 'E',
      template: '<div></div>',
      replace: true,
      // controller: 'staticMapDispatchController',
      // controllerAs: 'ctrl',
      // bindToController: true,
      link: function(scope, element, attrs) {
        let myLatLng = new google.maps.LatLng(29.945947, -90.070023);
        let mapOptions = {
          center: myLatLng,
          zoom: 15,
        };
        let map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        let marker = new google.maps.Marker({
          position: myLatLng,
          map,
          title: 'Pet Detective Headquarters',
        });
        marker.setMap(map);
      },
    };
  });

