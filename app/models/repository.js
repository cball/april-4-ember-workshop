import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  fullName: DS.attr('string'),
  organization: DS.belongsTo('organization')
});
