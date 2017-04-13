import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import startApp from 'repo-browser/tests/helpers/start-app';
import destroyApp from 'repo-browser/tests/helpers/destroy-app';

const VISIT_DAYS = 'li:contains(visitdays)';

describe('Acceptance | user views organization', function() {
  let application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    destroyApp(application);
  });

  describe('visiting /organizations and clicking', function() {
    beforeEach(function() {
      visit('/organizations');
      click(VISIT_DAYS);
    });

    it('has the correct URL', function() {
      expect(currentURL()).to.equal('/organizations/visitdays');
    });
  });
});
