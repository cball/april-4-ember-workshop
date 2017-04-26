import DS from 'ember-data';

export default DS.Model.extend({
  avatarUrl: DS.attr('string'),
  login: DS.attr('string'),
  name: DS.attr('string'),
  updateAt: DS.attr('date'),

  repositories: DS.hasMany('repository')
});
