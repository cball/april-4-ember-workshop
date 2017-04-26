import ActiveModelAdapter from 'active-model-adapter';
import config from 'repo-browser/config/environment';

export default ActiveModelAdapter.extend({
  host: 'https://api.github.com',
  headers: {
    Authorization: `token ${config.GITHUB_TOKEN}`
  }
});
