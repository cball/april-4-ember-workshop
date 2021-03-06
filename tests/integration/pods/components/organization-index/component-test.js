import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | organization index', function() {
  setupComponentTest('organization-index', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#organization-index}}
    //     template content
    //   {{/organization-index}}
    // `);

    this.render(hbs`{{organization-index}}`);
    expect(this.$()).to.have.length(1);
  });
});
