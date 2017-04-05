import Ember from 'ember';
// import service from 'ember-service/inject';
import config from 'repo-browser/config/environment';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  model() {
    // return [
    //   { id: 1, login: 'Org 1', isStarred: true, avatar_url: 'https://api.adorable.io/avatars/285/hello@visitdays.com.png' },
    //   { id: 2, login: 'Org 2', isStarred: false, avatar_url: 'https://api.adorable.io/avatars/285/what@visitdays.com.png' }
    // ];
    let ember = this.get('ajax').request(`https://api.github.com/orgs/emberjs?access_token=${config.GITHUB_TOKEN}`);
    let echobind = this.get('ajax').request(`https://api.github.com/orgs/echobind?access_token=${config.GITHUB_TOKEN}`);
    let visitdays = this.get('ajax').request(`https://api.github.com/orgs/visitdays?access_token=${config.GITHUB_TOKEN}`);

    // TODO: DISCUSS error handling

    return RSVP.all([
      ember,
      echobind,
      visitdays
    ]);
  },

  actions: {
    star(organization) {
      let starred = Ember.get(organization, 'isStarred');
      Ember.set(organization, 'isStarred', !starred);
    }
  }
});
