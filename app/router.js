import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('organizations', function() {
    this.route('organization', { path: ':login' }, function() {
      this.route('repositories');
    });
  });
});

export default Router;
