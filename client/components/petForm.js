angular.module('pet-detective')
  .controller('petFormController', function ($http, $window, formDataFactory) {
    this.profileInfo = JSON.parse(localStorage.getItem('userProfile'));
    this.email = localStorage.getItem('userEmail');
    this.place = null;
    this.formBody;
    this.type;
    this.latlong;
    this.render = async function () {
      this.bulletinData = await formDataFactory.fetchFormData();
      console.log(this.bulletinData, 'bulletin data');
      this.createMap();
      return this.bulletinData;
    };

    this.data = {
      singleSelect: null,
      multipleSelect: [],
      option1: 'Cat',
      option2: 'Dog',
    };

    this.petState = {
      lostOrFound: null,
      multipleSelect: [],
      option1: 'Lost',
      option2: 'Found',
    };

    this.submit = function (place, formBody) {
      console.log(this)
      this.date = new Date().toString();
      $http({
        url: '/bulletin',
        method: 'POST',
        data: {
          user: this.email,
          userpic: this.profileInfo.Paa,
          lostOrFound: this.petState.lostOrFound,
          type: this.data.singleSelect,
          address: this.place.formatted_address,
          message: formBody,
          date: this.date,
          latlong: [this.place.geometry.location.lat(), this.place.geometry.location.lng()],
        },
      })
        .then((response) => {
          console.log(response, 'whats this?');
          console.log('success');
          return formDataFactory.fetchFormData();
        })
        .then((bulletins) => {
          console.log(bulletins, 'bulletins');
          this.bulletinData = bulletins;
          this.data.singleSelect = null;
          this.petState.lostOrFound = null;
          this.formBody = null;
          this.address = null;
          this.createMap();
        });
    };

    this.createMap = (lat = 29.945947, long = -90.070023) => {
      this.woa = {
        city: 'PET',
      };
      //set up new marker images
      let blueMarker = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + '0000FF');
      let redMarker = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + 'ff0000');

      // set up map
      this.mapOptions = {
        zoom: 12,
        center: new google.maps.LatLng(lat, long),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      };

      this.mymapdetail = new google.maps.Map(document.getElementById('map-canvas'), this.mapOptions);

      this.bulletinData.forEach(obj => {
        let cord = obj.latlong.split(',');
        obj.lat = cord[0];
        obj.long = cord[1];
      });

      for (let i = 0; i < this.bulletinData.length; i++) {
        this.addMarker = function () {
          this.mymarker = new google.maps.Marker({
            map: this.mymapdetail,
            // animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(this.bulletinData[i].lat, this.bulletinData[i].long),
            title: this.woa.city,
            icon: this.bulletinData[i].lostOrFound === 'Lost' ? redMarker : blueMarker,
          });
        };
        this.addMarker();
        console.log(this.mymarker);
        let sco = this;
        let map = this.mymapdetail;
        let marker = this.mymarker
        google.maps.event.addListener(sco.mymarker, 'click' ,function() {
          var infowindow = new google.maps.InfoWindow({
            content: sco.bulletinData[i].message
          });
          if (sco.open) {
            sco.open.close();
          }
          infowindow.open(map, marker);
          sco.open = infowindow;
        });
      }
    };
    this.bullClick = (bull) => {
      this.createMap(bull.lat, bull.long);
    };

    this.deletePost = (bully) => {
      $http.post('/deletePost', bully)
        .then((response) => {
          return formDataFactory.fetchFormData();
        })
        .then((bulletins) => {
          this.bulletinData = bulletins;
          this.createMap();
        });
    };
  })
  .directive('petForm', function petFormDirective() {
    return {
      scope: {
        bulletinData: '<',
      },
      restrict: 'E',
      controller: 'petFormController',
      controllerAs: 'ctrl',
      bindToController: true,
      templateUrl: 'components/petForm.html',
    };
  });

