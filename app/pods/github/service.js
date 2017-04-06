import Ember from 'ember';
import config from 'repo-browser/config/environment';

const GITHUB_PREFIX = 'https://api.github.com';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),

  fetchOrganization(organization) {
    return this.get('ajax').request(`${GITHUB_PREFIX}/orgs/${organization}?access_token=${config.GITHUB_TOKEN}`);
  }
});
