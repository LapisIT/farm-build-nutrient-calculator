'use strict';

angular.module('farmBuildNutrientCalculator')

	.factory('MilkSold', function () {
		var milkSoldAPI = {};

		/**
		 * Returns nutrient data of milk
		 * @param {number} milkSoldPerYearInLitre - Quantity of milk sold in a year in litre.
		 * @param {number} milkProteinPercentage - Percentage of milk protein.
		 * @param {number} milkFatPercentage - Percentage of milk fat.
		 * @returns {object} milk nutrient data
		 */
		function nutrientOfMilkSoldByPercent(milkSoldPerYearInLitre, milkProteinPercentage, milkFatPercentage) {
			var milkProteinInKg, milkFatInKg;

			if (!milkSoldPerYearInLitre || !milkProteinPercentage || !milkFatPercentage) {
				return;
			}

			milkProteinInKg = percentageToKg(milkProteinPercentage, milkSoldPerYearInLitre);
			milkFatInKg = percentageToKg(milkFatPercentage, milkSoldPerYearInLitre);
			return nutrientInMilkSold(milkSoldPerYearInLitre, milkFatInKg, milkProteinInKg, milkProteinPercentage, milkFatPercentage);

		}

		/**
		 * Returns nutrient data of milk
		 * @param {number} milkSoldPerYearInLitre - Quantity of milk sold in a year in litre.
		 * @param {number} milkFatInKg - Quantity of milk fat in Kilograms.
		 * @param {number} milkProteinInKg - Quantity of milk protein in Kilograms.
		 * @returns {object} milk nutrient data
		 */
		function nutrientOfMilkSoldByKg(milkSoldPerYearInLitre, milkFatInKg, milkProteinInKg) {
			var milkProteinPercentage, milkFatPercentage;

			if (!milkSoldPerYearInLitre || !milkFatInKg || !milkProteinInKg) {
				return;
			}

			milkFatPercentage = kgToPercentage(milkFatInKg, milkSoldPerYearInLitre);
			milkProteinPercentage = kgToPercentage(milkProteinInKg, milkSoldPerYearInLitre);
			return nutrientInMilkSold(milkSoldPerYearInLitre, milkFatInKg, milkProteinInKg, milkProteinPercentage, milkFatPercentage);

		}

		/**
		 * Returns nutrient data of milk
		 * @param {number} milkSoldPerYearInLitre - Quantity of milk sold in a year in litre.
		 * @param {number} milkFatInKg - Quantity of milk fat in Kilograms.
		 * @param {number} milkProteinInKg - Quantity of milk protein in Kilograms.
		 * @param {number} milkProteinPercentage - Percentage of milk protein.
		 * @param {number} milkFatPercentage - Percentage of milk fat.
		 * @returns {object} milk nutrient data
		 */
		function nutrientInMilkSold(milkSoldPerYearInLitre, milkFatInKg, milkProteinInKg, milkProteinPercentage, milkFatPercentage) {

			var nitrogenPercentage = milkProteinPercentage / 6.33,
				phosphorusPercentage = (0.0111 * milkFatPercentage + 0.05255),
				potassiumPercentage = 0.14, sulphurPercentage = 0.06,
				nitrogenInKg = (milkSoldPerYearInLitre * nitrogenPercentage / 100).toFixed(0),
				potassiumInKg = (milkSoldPerYearInLitre * potassiumPercentage / 100).toFixed(0),
				sulphurInKg = (milkSoldPerYearInLitre * sulphurPercentage / 100).toFixed(0),
				phosphorusInKg = (milkSoldPerYearInLitre * phosphorusPercentage / 100).toFixed(0);

			return {
				milkSoldPerYearInLitre: milkSoldPerYearInLitre,
				milkFatInKg: milkFatInKg,
				milkFatPercentage: milkFatPercentage,
				milkProteinInKg: milkProteinInKg,
				milkProteinPercentage: milkProteinPercentage,
				nitrogenInKg: nitrogenInKg,
				nitrogenPercentage: nitrogenPercentage,
				phosphorusInKg: phosphorusInKg,
				phosphorusPercentage: phosphorusPercentage,
				potassiumInKg: potassiumInKg,
				potassiumPercentage: potassiumPercentage,
				sulphurInKg: sulphurInKg,
				sulphurPercentage: sulphurPercentage
			};

		}

		/**
		 * Returns nutrient value in percentage
		 * @param {number} valueInKg - Quantity of milk protein in Kilograms.
		 * @param {number} totalInLitre - Percentage of milk protein.
		 * @returns {number} nutrient value in percentage
		 */
		function kgToPercentage(valueInKg, totalInLitre) {
			return (valueInKg / totalInLitre) * 100;
		}

		/**
		 * Returns nutrient value in Kg
		 * @param {number} valuePercentage - Quantity of milk protein in Kilograms.
		 * @param {number} totalInLitre - Percentage of milk protein.
		 * @returns {number} nutrient value in Kg
		 */
		function percentageToKg(valuePercentage, totalInLitre) {
			return (valuePercentage * totalInLitre) / 100;
		}

		/**
		 * Public API
		 */
		milkSoldAPI.nutrientOfMilkSoldByKg = nutrientOfMilkSoldByKg;
		milkSoldAPI.nutrientOfMilkSoldByPercent = nutrientOfMilkSoldByPercent;

		return milkSoldAPI;

	});
