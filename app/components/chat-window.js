import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import {action} from '@ember/object';
import {tracked} from '@glimmer/tracking';
import {addConversationMessage, deleteConversation} from '../twilio/conversations';

export default class ChatWindowComponent extends Component {
  @service('user') userService;
  @service('theme') themeService;
  @service('chat') chatService;

  @tracked messageContent = '';

  get computedMessages() {
    let messages = this.args.chat.messages

    for (let index = 0; index < messages.length; index++) {
      let element = messages[index];
      let nextElement = index < messages.length ? messages[index + 1] : null;
      if (!nextElement || !nextElement.mine) {
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

  async getAllMessages(sid){

  }

  @action
  updateMessageContent(event){
    this.messageContent = event.target.value.toString();
  }

  @action
  async sendMessage(){
    let messageWithoutSpaces = this.messageContent.toString().replaceAll(' ','');
    let currentSid = this.args.chat.sid;

    if(messageWithoutSpaces.length > 0){
      console.log(messageWithoutSpaces, currentSid);
      await addConversationMessage(currentSid, messageWithoutSpaces)
      .then(async response => {
        this.messageContent = '';
        await this.chatService.getFullConversations(false, currentSid);
      });
    }
  }

  @action
  async deleteCurrentConversation(){
    let currentSid = this.args.chat.sid;
    await deleteConversation(currentSid)
      .then(async response => {
        console.log(response);
        await this.chatService.getFullConversations();
      })
      .catch(error => {
        console.log(error);
      })
  }
  
}
