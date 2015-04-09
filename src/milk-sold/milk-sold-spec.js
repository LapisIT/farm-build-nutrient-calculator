'use strict';

describe('farmBuild.nutrientCalculator module', function() {

  beforeEach(module('farmBuild.nutrientCalculator'));

  describe('MilkSold controller and factory', function(){
    it('MilkSold should be defined', inject(function($controller, MilkSold) {
      expect(MilkSold).toBeDefined();
    }));

    it('MilkSold should be defined', inject(function($controller, MilkSold) {
      expect(MilkSold).toBeDefined();
    }));

    it('Calculate MilkSold nutrient by Kg', inject(function($controller, MilkSold) {
      var nutrientByKg = MilkSold.nutrientOfMilkSoldByKg(100, 10, 90);
      expect(nutrientByKg).toBeDefined();
    }));

    it('Calculate MilkSold nutrient by %', inject(function($controller, MilkSold) {
      var nutrientByPercentage = MilkSold.nutrientOfMilkSoldByPercent(100, 10, 90);
      expect(nutrientByPercentage).toBeDefined();
    }));

    it('Calculate MilkSold nutrient by % and kg should have same result', inject(function($controller, MilkSold) {
      var nutrientByPercentage = MilkSold.nutrientOfMilkSoldByPercent(1000, 10, 90);
      var nutrientByKg = MilkSold.nutrientOfMilkSoldByKg(1000, 100, 900);
      expect(nutrientByPercentage.milkFatInKg).toEqual(nutrientByKg.milkFatInKg);
      expect(nutrientByPercentage.milkFatPercentage).toEqual(nutrientByKg.milkFatPercentage);
      expect(nutrientByPercentage.sulphurPercentage).toEqual(nutrientByKg.sulphurPercentage);
      expect(nutrientByPercentage.phosphorusInKg).toEqual(nutrientByKg.phosphorusInKg);
    }));

  });
});
