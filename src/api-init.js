'use strict';

// Inject modules
angular.module('farmBuild.nutrientCalculator').run(function(GoogleAnalytic, MilkSold){});

window.farmbuild = {
	nutrientcalculator: {}
};

// Init api by instantiating angular module internally, users are not tied to angular for using farmbuild.
angular.injector(['ng', 'farmBuild.nutrientCalculator']);