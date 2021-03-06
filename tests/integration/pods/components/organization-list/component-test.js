import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | organization list', function() {
  setupComponentTest('organization-list', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#organization-list}}
    //     template content
    //   {{/organization-list}}
    // `);

    this.render(hbs`{{organization-list}}`);
    expect(this.$()).to.have.length(1);
  });
});
