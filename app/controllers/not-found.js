import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
import { action } from '@ember/object'

export default class NotFoundController extends Controller {
    @service('user') userService;
    @service router;

    @action
    redirectToMainPage(){
        if (!this.userService.verifyUser()) {
            this.router.transitionTo('login');
        }else{
            this.router.transitionTo('home.chats');
        }
    }
}
