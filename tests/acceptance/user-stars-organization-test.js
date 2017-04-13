import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import startApp from 'repo-browser/tests/helpers/start-app';
import destroyApp from 'repo-browser/tests/helpers/destroy-app';

const STARS_SELECTOR = '[data-test="number-of-stars"]';

describe('Acceptance | user stars organization', function() {
  let application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    destroyApp(application);
  });

  describe('with no stars', function() {
    beforeEach(function() {
      visit('/organizations');
    });

    it('shows 0 stars', function() {
      expect(hasStarCount(0)).to.be.ok;
    });

    describe('starring organizations', function() {
      beforeEach(function() {
        starOrganization('visitdays');
        starOrganization('echobind');
      });
    });
  });
});

function hasStarCount(number) {
  return find(`${STARS_SELECTOR}:contains(${number})`).length === 1;
}

function starOrganization(name) {
  return findOrganization(name).find('span');
}

function findOrganization(name) {
  return find(`li:contains(${name})`);
}
