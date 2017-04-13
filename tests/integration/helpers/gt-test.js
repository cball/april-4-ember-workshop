import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Helper | gt', function() {
  setupComponentTest('gt', {
    integration: true
  });

  describe('with proper arguments', function() {
    beforeEach(function() {
      this.render(hbs`{{gt 3 1}}`);
    });

    it('returns true', function() {
      expect(this.$().text().trim()).to.equal('true');
    });
  })
});
