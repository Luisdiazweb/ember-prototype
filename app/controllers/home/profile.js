import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default class HomeProfileController extends Controller {
    @service('user') userService;

    get userLogged() {
        return this.userService.user;
    }
}
