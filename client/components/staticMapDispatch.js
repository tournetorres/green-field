
angular.module('pet-detective')
  .controller('staticMapDispatchController', function (fetchCoordsFactory) {
    fetchCoordsFactory.fetchCoords().then(function (data) {
      this.woa = {
        city: 'PET',
      };


      // set up map
      this.mapOptions = {
        zoom: 12,
        center: new google.maps.LatLng(29.945947, -90.070023),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      };

      this.mymapdetail = new google.maps.Map(document.getElementById('map-canvas'), this.mapOptions);

      const coords = data.coords.map(function (el) {
        return [Number(el[0]), Number(el[1])];
      });
      for (let i = 0; i < coords.length; i++) {
  
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
    };
  });

