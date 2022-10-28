import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class HomeRoute extends Route {
  @service('user') userService;
  @service router;

  beforeModel(transition) {
    if (!this.userService.verifyUser()) {
      let loginController = this.controllerFor('login');
      loginController.previousTransition = transition;
      this.router.transitionTo('login');
    }
  }
}
