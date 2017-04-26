import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  login: faker.internet.userName,
  // non-shorthand (if you need to pass arguments to faker function)
  // login() {
  //   return faker.internet.userName(asdf);
  // }
  avatar_url: faker.image.avatar
});
