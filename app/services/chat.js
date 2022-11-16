import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import {
  getAllConversations,
  getContactConversationMessages
} from '../twilio/conversations';
import moment from 'moment';
import Pusher from 'pusher-js';
import config from '../config/environment';

export default class ChatService extends Service {
  @tracked currentChat = null;
  @tracked chatList = null;
  @tracked loading = true;

  @service contact;
  @service('user') userService;

  constructor() {
    super(...arguments);
    const pusher = new Pusher(config.pusher.key, {
      cluster: config.pusher.cluster,
    });

    if (config.environment === 'development') {
      Pusher.log = (msg) => {
        console.log(msg);
      };
    }

    const channel = pusher.subscribe('sms_received');
    channel.bind('sms_received', async (data) => {
      // Expected payload
      // {
      //   "body": "Testing", SMS content
      //   "from": "+13189739014", Who sent the SMS
      //   "sent_on": "Wed, 16 Nov 2022 02:14:53 +0000", When the SMS was sent
      //   "direction": "inbound"
      // }
      console.log("received",data);
      const sid = this.currentChat ? this.currentChat.sid : null;
      await this.getFullConversations(sid == null, sid);
    });
  }

  async getConversationsData(){
    await getAllConversations()
      .then(async response => {
        const chats = response.conversations;
        this.chatList = await chats.map(chat => {
          return {
            ...this.contact.contactsList.filter(c => c.conversationSid && c.conversationSid == chat.sid)[0],
            sid: chat.sid,
            messages: []
          }
        });
      })
      .catch(error => {
        console.log(error)
        this.chatList = [];
      });
  }

  async getFullConversations(setDefaultChat = true, sidSelected = null){
    this.loading = true;
    await this.getConversationsData();
    for (let index = 0; index < this.chatList.length; index++) {
      const element = this.chatList[index];
      await getContactConversationMessages(element.sid).then(response => {
        element.messages = response.messages.map(message => {
          let phoneWithoutSpaces = this.userService.user.phone.toString().replaceAll(' ','');
          return {
            id: message.index,
            content: message.body,
            date: this.formatDate(message.date_updated),
            mine: message.author == phoneWithoutSpaces,
            avatar: null,
            showAvatar: false,
            contactName: ''
          }
        });
      });
    }
    /* Setting new current chat */
    if(setDefaultChat){
      this.selectCurrentChat();
    }else{
      this.selectSpecificChat(sidSelected);
    }
    this.loading = false;
  }

  selectSpecificChat(sid){
    this.currentChat = null;
    if(this.chatList.length > 0 && sid){
      this.currentChat = this.chatList.filter(item => item.sid == sid)[0];
    }
  }

  selectCurrentChat(){
    this.currentChat = null;
    if(this.chatList.length > 0){
      this.currentChat = this.chatList[0];
    }
  }

  formatDate(date) {
    let todayDate = moment();
    let formatedDate = moment(date);
    let differenceDate = todayDate.diff(formatedDate, 'days');
    let dateNew = null;

    /*console.log(`today: ${todayDate} evaluated: ${formatedDate}`);*/
    if (differenceDate < 4) {
      dateNew = moment(date).from() + ` - ${moment(date).format('hh:mm a')}`;

      if (differenceDate < 1) {
        dateNew = 'today - ' + moment(date).format('hh:mm a');
      }

      if (differenceDate == 1) {
        dateNew = 'yestarday - ' + moment(date).format('hh:mm a');
      }
    } else {
      dateNew = moment(date).format('YYYY-MM-dd - hh:mm a');
    }

    return dateNew;
  }

  @action
  setCurrentChat(sid) {
    this.currentChat = this.chatList.filter(chat => chat.sid == sid)[0];
  }
}
