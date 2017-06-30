let mod = angular.module('pet-detective', []);
mod.service('fetchForm', function ($http) {
  const fetchForm = {};

  fetchForm.fetchLostFormData = function () {
    return $http.get('/lostbulletin')
      .then(function (response) {
        console.log(response.data);
      });
  };

  fetchForm.fetchFoundFormData = function () {
    return $http.get('/foundbulletin')
      .then(function (response) {
        console.log(response.data);
      });
  };
});
