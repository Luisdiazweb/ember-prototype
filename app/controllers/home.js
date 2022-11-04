import Controller from '@ember/controller';
import { service } from '@ember/service';

export default class HomeController extends Controller {
  @service('theme') themeService;
  @service('chat') chatService;

  constructor() {
    super(...arguments)
    this.chatService.getConversationByPhone('+50375531593')
  }

  get chat(){
      return this.chatService.currentChat;
  }
}
