import Ember from 'ember';

export default Ember.Test.registerHelper('trimText', function(app, selector) {
  return trimText(selector);
});

export function trimText(selector) {
  return selector.text().trim();
}
