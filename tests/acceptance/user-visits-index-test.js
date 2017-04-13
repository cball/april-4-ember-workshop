import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import startApp from 'repo-browser/tests/helpers/start-app';
import destroyApp from 'repo-browser/tests/helpers/destroy-app';

describe('Acceptance | user visits index', function() {
  let application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    destroyApp(application);
  });

  it('redirects to /organizations', function() {
    visit('/');

    return andThen(() => {
      expect(currentURL()).to.equal('/organizations');
    });
  });

  describe('visiting the index page', function() {
    beforeEach(function() {
      // mocha waits for async helpers before moving on
      visit('/');
    });

    it('redirects to /organizations', function() {
      expect(currentURL()).to.equal('/organizations');
    });
  });
});
