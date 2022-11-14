import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import chatsListExample from '../staticData/chats';
import config from '../config/environment';
import { action } from '@ember/object';
import { service } from '@ember/service';
import {
  createConversation,
  addConversationParticipant,
  addConversationMessage,
  getContactConversationMessages
} from '../twilio/conversations';

export default class ChatService extends Service {
  @tracked currentChat = null;
  @tracked chatList = null;
  
  @service contact;

  constructor() {
    super(...arguments);
    /*createConversation({
      id: 'vEspsW8uONMWEGbVY5RK',
      name: 'Kevin',
      phone: '+50375531593',
    }).then((r) => console.log(r));*/
    // this.addConversationMessage('CH15b6a2d7553d4277b46655c1df785e0e', 'Test message from ember app');
  }

  async getChatList() {
    this.chatList =  await this.contact.getContactsList();
    return await this.chatList;
  }

  getChatDetails(user_id) {
    return null;
  }

  @action
  setCurrentChat(user_id) {
    this.currentChat = this.getChatDetails(user_id);
  }
}
