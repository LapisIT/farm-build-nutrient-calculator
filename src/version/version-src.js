'use strict';

angular.module('farmBuild.nutrientCalculator.version', [
  'farmBuild.nutrientCalculator.version.interpolate-filter',
  'farmBuild.nutrientCalculator.version.version-directive'
])

.value('version', '0.1');

