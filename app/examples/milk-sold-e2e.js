'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('Farm web nutrient calculator', function() {

  browser.get('milk-sold.html');

  it('should automatically redirect to /milk-sold when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/milk-sold");
  });


  describe('milk-sold', function() {

    beforeEach(function() {
      browser.get('milk-sold.html');
    });

    it('should render sample when user navigates to /milk-sold', function() {
      expect(element.all(by.css('body h3')).first().getText()).
        toMatch('Farm Build Nutrient Calculator');
    });

  });

});
