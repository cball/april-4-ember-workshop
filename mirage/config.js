// import Mirage from 'ember-cli-mirage';

export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  this.urlPrefix = 'https://api.github.com';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */

  // (schema.organizations)
  this.get('/orgs/:login', ({ organizations }, request) => {
    let { login } = request.params;

    return organizations.findBy({ login });

    // a custom request:
    // switch (request.params.login) {
    //   case 'emberjs':
    //     return {
    //       "login": "emberjs",
    //       "id": 1253363,
    //       "avatar_url": "https://avatars1.githubusercontent.com/u/1253363?v=3",
    //     }
    //   case 'echobind':
    //     return {
    //       "login": "echobind",
    //       "id": 570840,
    //       "avatar_url": "https://avatars0.githubusercontent.com/u/570840?v=3",
    //     }
    //   case 'visitdays':
    //     return {
    //       "login": "visitdays",
    //       "id": 5282206,
    //       "avatar_url": "https://avatars3.githubusercontent.com/u/5282206?v=3",
    //     }
    //   case 'yarnpkg':
    //     return {
    //       "login": "yarnpkg",
    //       "id": 22247014,
    //       "avatar_url": "https://avatars0.githubusercontent.com/u/22247014?v=3",
    //     }
    //   default:
    //     return new Mirage.Response(404);
    // }
  })
}
