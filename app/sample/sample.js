'use strict';

angular.module('farmBuildNutrientCalculator.Sample', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sample', {
    templateUrl: 'sample/sample.html',
    controller: 'SampleCtrl'
  });
}])

.controller('SampleCtrl', [function() {

}]);