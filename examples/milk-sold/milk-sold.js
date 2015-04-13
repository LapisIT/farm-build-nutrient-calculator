'use strict';

angular.module('farmBuild.nutrientCalculator.examples.milkSold', ['farmBuild.nutrientCalculator'])

	.run(function($rootScope){
		$rootScope.appVersion = farmbuild.nutrientcalculator.sampleCodeVersion;
	})

	.controller('MilkSoldCtrl', function ($scope, MilkSold, GoogleAnalytic) {

		GoogleAnalytic.username = 'SpatialVision';

		$scope.result =  {
				milkSoldPerYearInLitre: '-',
				milkFatInKg: '-',
				milkFatPercentage: '-',
				milkProteinInKg: '-',
				milkProteinPercentage: '-',
				nitrogenInKg: '-',
				nitrogenPercentage: '-',
				phosphorusInKg: '-',
				phosphorusPercentage: '-',
				potassiumInKg: '-',
				potassiumPercentage: '-',
				sulphurInKg: '-',
				sulphurPercentage: '-'
			};

		$scope.nutrientOfMilkSoldByPercent = function (milkSoldPerYearInLitre, milkProteinPercentage, milkFatPercentage) {
			$scope.result = MilkSold.nutrientOfMilkSoldByPercent(milkSoldPerYearInLitre, milkProteinPercentage, milkFatPercentage);
			if ($scope.result) {
				$scope.milkFatInKg = $scope.result.milkFatInKg;
				$scope.milkProteinInKg = $scope.result.milkProteinInKg;
			}
		};

		$scope.nutrientOfMilkSoldByKg = function (milkSoldPerYearInLitre, milkProteinInKg, milkFatInKg) {
			$scope.result = MilkSold.nutrientOfMilkSoldByKg(milkSoldPerYearInLitre, milkProteinInKg, milkFatInKg);
			if ($scope.result) {
				$scope.milkFatPercentage = $scope.result.milkFatPercentage;
				$scope.milkProteinPercentage = $scope.result.milkProteinPercentage;
			}
		};

	});
