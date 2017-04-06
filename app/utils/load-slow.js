import RSVP from 'rsvp';
import Ember from 'ember';

// TODO: testing when in test mode timeout = 0

export default function loadSlow(request, timeout=2000) {
    return new RSVP.Promise((resolve) => {
      Ember.run.later(this, () => {
        resolve(request);
      }, timeout)
    });
}
