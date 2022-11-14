import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class ChatWindowComponent extends Component {
  @service('user') userService;
  @service('theme') themeService;

  get computedMessages() {
    let messages = this.args.chat.messages

    for (let index = 0; index < messages.length; index++) {
      let element = messages[index];
      let nextElement = index < messages.length ? messages[index + 1] : null;
      if (!nextElement || element.from != nextElement.from) {
        element.showAvatar = true;
        element.avatar = element.mine
          ? this.userService.user.avatar
          : this.args.chat.image;
        element.contactName = element.mine
          ? this.userService.user.name
          : this.args.chat.name;
      }
    }

    return messages.reverse();
  }

  get chatExists(){
    return this.args.chat != null;
  }

  get disableSentButton(){
    return !this.chatExists;
  }
}
