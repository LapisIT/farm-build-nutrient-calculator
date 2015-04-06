'use strict';

describe('farmBuildNutrientCalculator.version module', function() {
  beforeEach(module('farmBuildNutrientCalculator.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
