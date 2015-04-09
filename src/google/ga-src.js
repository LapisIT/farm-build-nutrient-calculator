'use strict';

/**
 * nutrientCalculator/GA class
 * @module nutrientCalculator/GA
 */
angular.module('farmBuild.nutrientCalculator', ['farmBuild.nutrientCalculator.version'])

	.factory('GA', function () {

		var exports = {};

		/**
		* @property {string} ga.username - Username of the api user
		 * @public
		*/
		exports.username = 'anonymous';

		return exports;
	});