'use strict';

angular.module('farmBuildNutrientCalculator')

	.controller('MilkSoldCtrl', function ($scope, MilkSold) {
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
		$scope.nutrientOfMilkSoldByKg = function (milkSoldPerYearInLitre, milkFatInKg, milkProteinInKg) {
			$scope.result = MilkSold.nutrientOfMilkSoldByKg(milkSoldPerYearInLitre, milkFatInKg, milkProteinInKg);
			if ($scope.result) {
				$scope.milkFatPercentage = $scope.result.milkFatPercentage;
				$scope.milkProteinPercentage = $scope.result.milkProteinPercentage;
			}
		};

	});
