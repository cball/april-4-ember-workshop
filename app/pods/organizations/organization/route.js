import Ember from 'ember';

export default Ember.Route.extend({
  github: Ember.inject.service(),

  model({ login }) {
    // if we have organizations in parent route:
    let organizations = this.modelFor('organizations');
    let localOrganization = organizations.findBy('login', login);

    // explain peekRecord when ember data

    return localOrganization || this.get('github').fetchOrganization(login);
  }
});
