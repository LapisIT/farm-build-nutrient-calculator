'use strict';

/**
 * nutrientCalculator/GoogleAnalytic class
 * @module nutrientCalculator/GoogleAnalytic
 */
angular.module('farmBuild.nutrientCalculator')

	.factory('GoogleAnalytic', function () {

		var exports = {};

		/**
		* @property {string} username - Username of the api user
		 * @public
		*/
		exports.username = 'anonymous';
		window.farmbuild.nutrientcalculator.GoogleAnalytic = exports;
		return exports;
	});