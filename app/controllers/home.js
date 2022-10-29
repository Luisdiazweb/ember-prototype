import Controller from '@ember/controller';
import { service } from '@ember/service';

export default class HomeController extends Controller {
  @service('theme') themeService;
  @service('chat') chatService;

  get chat(){
      return this.chatService.currentChat;
  }
}
