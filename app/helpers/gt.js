import Ember from 'ember';

export function gt([item1, item2]/*, hash*/) {
  // let [item1, item2] = params;

  return item1 > item2;
}

export default Ember.Helper.helper(gt);
