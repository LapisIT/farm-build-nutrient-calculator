'use strict';

angular.module('farmBuildNutrientCalculator.version', [
  'farmBuildNutrientCalculator.version.interpolate-filter',
  'farmBuildNutrientCalculator.version.version-directive'
])

.value('version', '0.1');
