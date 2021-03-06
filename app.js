//Define an angular module for our app
angular.module('FYJApp', ['ngRoute', 'app.controllers','perfect_scrollbar'])

//Define Routing for app
.config(['$routeProvider', function($routeProvider) {

    $routeProvider.
      when('/Accueil', {
	templateUrl: 'templates/accueil.html',
	controller: 'AccueilController'
      }).
      when('/Stats-Technologies', {
	templateUrl: 'templates/stats-techno.html',
	controller: 'StatsTechnosController'
      }).
      when('/Stats-Company', {
	templateUrl: 'templates/stats-company.html',
	controller: 'StatsCompanyController'
      }).
      when('/Graphe-Job-Company', {
	templateUrl: 'templates/graphes-job-company.html',
	controller: 'GraphesJCController'
      }).
        when('/Graphe-Job-Technology', {
          templateUrl: 'templates/graphes-job-company.html',
          controller: 'GraphesJTController'
        }).
        when('/Graphe-Company-Technology', {
          templateUrl: 'templates/graphes-job-company.html',
          controller: 'GraphesCTController'
        }).
      when('/Geo-Annonces', {
	templateUrl: 'templates/geo-annonces.html',
	controller: 'GeoAnnoncesController'
      }).
      otherwise({
	redirectTo: '/Accueil'
      });
}]);