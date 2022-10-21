import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class LoginController extends Controller {
  @service router;
  @tracked email = '';
  @tracked password = '';

  @action
  verifyUser(event) {
    event.preventDefault();
    console.log(this.email, this.password);

    /* Verifying data */
    if (this.email && this.password) {
      this.router.transitionTo('home');
    }
  }
}
