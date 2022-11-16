import Controller from '@ember/controller';
import { service } from '@ember/service';

export default class HomeController extends Controller {
  @service('theme') themeService;
  @service('chat') chatService;
  @service('user') userService;

  get chat() {
    let chatInfo = this.chatService.currentChat;
    return chatInfo;
  }
}
