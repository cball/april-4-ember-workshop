import Ember from 'ember';
import loadSlow from 'repo-browser/utils/load-slow';

export default Ember.Route.extend({
  model() {
    return loadSlow({}, 1000);
  }
});
