export function initialize(application) {
  application.inject('route', 'github', 'service:github');
}

export default {
  name: 'inject-github',
  initialize
};
