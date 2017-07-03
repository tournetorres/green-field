angular.module('pet-detective')
  .controller('renderController', function () {
    this.render = function (collection) {
      collection.forEach(item => console.log(item));
    };
  })
  .directive('render', function renderDirective() {
    return {
      controller: 'renderController',
      controllerAs: 'ctrl',
      bindToController: true,
    };
  });
