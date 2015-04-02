'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('Farm web nutrient calculator', function() {

  browser.get('index.html');

  it('should automatically redirect to /sample when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/sample");
  });


  describe('sample', function() {

    beforeEach(function() {
      browser.get('index.html#/sample');
    });


    it('should render sample when user navigates to /sample', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for sample/);
    });

  });

});
