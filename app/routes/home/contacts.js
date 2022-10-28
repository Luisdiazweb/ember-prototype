import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class HomeContactsRoute extends Route {
  @service('user') userService;
  @service router;

  beforeModel(transition) {
    if (!this.userService.verifyUser()) {
      transition.abort();
      this.router.transitionTo('login');
    }
  }
}
