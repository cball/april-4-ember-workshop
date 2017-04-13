import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';
import { trimText } from '../../helpers/trim-text';

describe('Integration | Helper | decorate number', function() {
  setupComponentTest('decorate-number', {
    integration: true
  });

  describe('with number not equal to 0 or 1', function() {
    beforeEach(function() {
      this.render(hbs`{{decorate-number 3}}`);
    });

    it('returns 🔥', function() {
      let expectedString = wrappedString(3, '🔥');
      let actualString = trimText(this.$());
      expect(expectedString).to.equal(actualString);
    });
  });

  describe('with number = 1', function() {
    beforeEach(function() {
      this.render(hbs`{{decorate-number 1}}`);
    });

    it('returns 😀', function() {
      let expectedString = wrappedString(1, '😀');
      let actualString = this.$().text().trim();
      expect(expectedString).to.equal(actualString);
    });
  });

  describe('yelling', function() {
    beforeEach(function() {
      this.render(hbs`{{decorate-number 99 yell=true}}`);
    });

    it('returns 🔥 wrapped in strong tags', function() {
      let expectedString = `<strong>${wrappedString(99, '🔥')}</strong>`;
      let actualString = this.$().html().trim();
      expect(expectedString).to.equal(actualString);
    });
  });
});

function wrappedString(number, character) {
  return `${character} ${number} ${character}`;
}
