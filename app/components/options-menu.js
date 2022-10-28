import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class OptionsMenuComponent extends Component {
  @service router;
  @service('user') userService;
  @service('theme') themeService;

  get currentRoute() {
    return this.router.currentRouteName;
  }

  @action
  logoutClick() {
    this.userService.logoutUser();
    this.router.transitionTo('login');
  }
}
