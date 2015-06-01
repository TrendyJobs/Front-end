//Define an angular module for our app
var FYJApp = angular.module('FYJApp', ['ngRoute']);

//Define Routing for app
//Uri /AddNewOrder -> template AddOrder.html and Controller AddOrderController
//Uri /ShowOrders -> template ShowOrders.html and Controller AddOrderController
FYJApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/Accueil', {
	templateUrl: 'templates/accueil.html',
	controller: 'AccueilController'
      }).
      when('/Stats-Annonces', {
	templateUrl: 'templates/stats-annonces.html',
	controller: 'AccueilController'
      }).
      when('/Graphe-Job-Company', {
	templateUrl: 'templates/graphes-job-company.html',
	controller: 'AccueilController'
      }).
      otherwise({
	redirectTo: '/Accueil'
      });
}]);


FYJApp.controller('AddOrderController', function($scope) {
	
	$scope.message = 'This is Add new order screen';
	alert("coucou");
	
});


FYJApp.controller('ShowOrdersController', function($scope) {

	$scope.message = 'This is Show orders screen';
	alert("coucou");

});
