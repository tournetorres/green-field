
angular.module('pet-detective')
  .controller('staticMapDispatchController', function () {
    const item = {
      coordinates: [29.945947, -90.070023],
    };

    const woa = {
      city: 'Pet Detective Headquarters',
    };


    // set up map
    let mapOptions = {
      zoom: 10,
      center: new google.maps.LatLng(29.945947, -90.070023),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    this.mymapdetail = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    // add marker
    this.addMarker = function () {
      this.mymarker = new google.maps.Marker({
        map: this.mymapdetail,
        animation: google.maps.Animation.DROP,
        position: new google.maps.LatLng(item.coordinates[0], item.coordinates[1]),
        title: woa.city,
      });
    };
  })
  .directive('staticMapDispatch', function staticMapDispatchDirective() {
    return {
      scope: {
      },
      restrict: 'E',
      template: "<div ng-model='ctrl.mymarker' ng-click='ctrl.addMarker();' id='map-canvas'></div>",
      controller: 'staticMapDispatchController',
      controllerAs: 'ctrl',
      bindToController: true,
      replace: true,
    //   link(scope, element, attrs) {
    //     const myLatLng = new google.maps.LatLng(29.945947, -90.070023);
    //     const mapOptions = {
    //       center: myLatLng,
    //       zoom: 15,
    //     };
    //     const map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    //     let marker;

    //     google.maps.event.addListener(map, 'click', function (event) {
    //       placeMarker(event.latLng);
    //     });

    //     function placeMarker(location) {
    //       if (marker == null) {
    //         marker = new google.maps.Marker({
    //           position: location,
    //           map,
    //         });
    //       } else { marker.setPosition(location); }
    //     }
    //     // marker.setMap(map);
    //   },
    };
  });

