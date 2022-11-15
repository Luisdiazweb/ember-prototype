import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import {action} from '@ember/object';
import {tracked} from '@glimmer/tracking';
import {addConversationMessage, deleteConversation} from '../twilio/conversations';
import Swal from 'sweetalert2';

export default class ChatWindowComponent extends Component {
  @service('user') userService;
  @service('theme') themeService;
  @service('chat') chatService;

  @tracked messageContent = '';

  get computedMessages() {
    let messages = [...this.args.chat.messages]

    for (let index = 0; index < messages.length; index++) {
      let element = messages[index];
      console.log(element);
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
      await addConversationMessage(currentSid, this.messageContent)
      .then(async response => {
        this.messageContent = '';
        await this.chatService.getFullConversations(false, currentSid);
      });
    }
  }

  @action
  async sendMessagePressingKey(event){
    let keyPressed = event.code;
    let messageWithoutSpaces = this.messageContent.toString().replaceAll(' ','');
    let currentSid = this.args.chat.sid;

    if(messageWithoutSpaces.length > 0 && keyPressed == "Enter"){
      await addConversationMessage(currentSid, this.messageContent)
      .then(async response => {
        this.messageContent = '';
        await this.chatService.getFullConversations(false, currentSid);
      });
    }
  }

  @action
  async deleteCurrentConversation(){
    let currentSid = this.args.chat.sid;
    Swal.fire({
      title: 'Please Wait!',
      html: 'Deleting conversation...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      }
    });

    await deleteConversation(currentSid)
      .then(async response => {
        console.log(response);
        Swal.close();
        Swal.fire({
          title: 'Success',
          text: 'Conversation removed successfully!',
          icon: 'success',
        });
        await this.chatService.getFullConversations();
      })
      .catch(error => {
        Swal.close();
        Swal.fire({
          title: 'Error',
          text: 'Conversation cannot be removed! try again.',
          icon: 'error',
        });
        console.log(error);
      })
  }
  
}
