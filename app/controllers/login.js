import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class LoginController extends Controller {
  @service router;
  @service('user') userService;

  @tracked email = '';
  @tracked password = '';
  @tracked errorList = [];

  @action
  udpateEmail(event) {
    this.email = event.target.value.toString();
  }

  @action
  updatePassword(event) {
    this.password = event.target.value.toString();
  }

  @action
  verifyUser(event) {
    event.preventDefault();

    /* Verifying data */
    if (this.userService.authUser(this.email, this.password)) {
      this.router.transitionTo('home');
    }
  }
}
