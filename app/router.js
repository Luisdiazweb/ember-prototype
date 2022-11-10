import EmberRouter from '@ember/routing/router';
import config from 'message/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('login', { path: '/' });
  this.route('home', function () {
    this.route('profile');
    this.route('contacts');
    this.route('chats', { path: '/' });
  });
  this.route('not-found', { path: '/*path' });
});
