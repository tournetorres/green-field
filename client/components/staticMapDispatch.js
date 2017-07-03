
angular.module('pet-detective')
  .controller('staticMapDispatchController', function (fetchCoordsFactory) {
    fetchCoordsFactory.fetchCoords().then(function (data) {
      this.woa = {
        city: 'Pet Detective Headquarters',
      };


      // set up map
      this.mapOptions = {
        zoom: 10,
        center: new google.maps.LatLng(29.945947, -90.070023),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      };

      this.mymapdetail = new google.maps.Map(document.getElementById('map-canvas'), this.mapOptions);

      const coords = data.coords.map(function (el) {
        return [Number(el[0]), Number(el[1])];
      });
      for (let i = 0; i < coords.length; i++) {
        // this.item = {
        //   coordinates: [coords[i][0], coords[i][1]],
        // };
        // console.log(this.item.coordinates[0], this.item.coordinates[1]);

        // add marker
        this.addMarker = function () {
          this.mymarker = new google.maps.Marker({
            map: this.mymapdetail,
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(coords[i][0], coords[i][1]),
            title: this.woa.city,
          });
        };
        this.addMarker();
      }
    });


    // this.item = {
    //   coordinates: [29.945947, -90.070023],
    // };
  })
  .directive('staticMapDispatch', function staticMapDispatchDirective() {
    return {
      scope: {
      },
      restrict: 'E',
      template: "<div ng-model='ctrl.mymarker' id='map-canvas'></div>",
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

