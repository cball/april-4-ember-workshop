import Ember from 'ember';

export default Ember.Component.extend({
  starredOrganizations: Ember.computed.filterBy('organizations', 'isStarred'),
  hasStarredOrganizations: Ember.computed.gt('starredOrganizations', 0),
});
