'use strict';

angular.module('farmBuildNutrientCalculator', [
  'ngRoute',
  'farmBuildNutrientCalculator.Sample',
  'farmBuildNutrientCalculator.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/sample'});
}]);
