'use strict';

(function(window){
	var farmbuild = {
		nutrientcalculator: {}
	};
	window.farmbuild = farmbuild;
})(window);

// Init api by instantiating angular module internally, users are not tied to angular for using farmbuild.
angular.module('farmBuild.nutrientCalculator', ['farmBuild.nutrientCalculator.version']);