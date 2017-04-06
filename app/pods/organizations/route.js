import Ember from 'ember';
// import service from 'ember-service/inject';
import RSVP from 'rsvp';
import loadSlow from '../../utils/load-slow';

export default Ember.Route.extend({
  model() {
    // return [
    //   { id: 1, login: 'Org 1', isStarred: true, avatar_url: 'https://api.adorable.io/avatars/285/hello@visitdays.com.png' },
    //   { id: 2, login: 'Org 2', isStarred: false, avatar_url: 'https://api.adorable.io/avatars/285/what@visitdays.com.png' }
    // ];
    let ember = this.get('github').fetchOrganization('emberjs');
    let echobind = this.get('github').fetchOrganization('echobind');
    let visitdays = this.get('github').fetchOrganization('visitdays');

    // TODO: DISCUSS error handling

    let request = RSVP.all([
      ember,
      echobind,
      visitdays
    ]);

    return loadSlow(request, 1000);

    //  catch(() => {
    //    // show an error flash and transition
    //
    //  });
  },

  actions: {
    star(organization) {
      let starred = Ember.get(organization, 'isStarred');
      Ember.set(organization, 'isStarred', !starred);
    }
  }
});
