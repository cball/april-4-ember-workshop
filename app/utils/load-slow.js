import RSVP from 'rsvp';
import Ember from 'ember';

export default function loadSlow(request, timeout=2000) {
    if (Ember.testing) {
      timeout = 0;
    }

    return new RSVP.Promise((resolve) => {
      Ember.run.later(this, () => {
        resolve(request);
      }, timeout)
    });
}
