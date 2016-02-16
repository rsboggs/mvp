angular.module('app', [
  'app.services',
  'app.places',
  'ngRoute'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/places/places.html',
        controller: 'PlacesController'
      })
      .when('/places', {
        templateUrl: 'app/places/places.html',
        controller: 'PlacesController'
      })
      .otherwise({
        redirectTo: '/places'
      });
  });