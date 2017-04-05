import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  organizations: null,

  init() {
    this._super(...arguments);
    this.set('organizations', this.get('organizations') || []);
  },

  'on-select-organization': () => {},
  // 'on-select-special': () => {},

  actions: {
    // hideSidebarAndSelect(organization) {
    //   this.set('isSidebarVisible', false)
    //
    //   if you need to dynamically reference object keys:
    //   let selectOrganization = this[`on-select-${organization.type}`];
    //   selectOrganization(organization);
    // }
  }
});
