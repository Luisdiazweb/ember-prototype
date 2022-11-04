import Controller from '@ember/controller';
import { service } from '@ember/service';

export default class HomeController extends Controller {
  @service('theme') themeService;
  @service('chat') chatService;
  @service('message') messageService;
  @service('user') userService;

  get chat() {
    let chatInfo = this.chatService.currentChat
    let messages = this.messageService.getMessages(chatInfo.contact_id, this.userService.user.id)
    let chatData = {
      ...chatInfo,
      messages: messages
    }

    console.log(chatData)
    return chatData;
  }
}
