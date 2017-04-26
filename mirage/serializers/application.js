import { ActiveModelSerializer } from 'ember-cli-mirage';

export default ActiveModelSerializer.extend({
  root: false,
  embed: true
});
