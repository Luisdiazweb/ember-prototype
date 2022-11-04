import Service from '@ember/service';
import {tracked} from '@glimmer/tracking';
import chatsListExample from '../staticData/chats';
import { action } from '@ember/object';

import config from '../config/environment';

const accountSid = config.twilio.TWILIO_ACCOUNT_SID;
const authToken = config.twilio.TWILIO_AUTH_TOKEN;
const phone = config.twilio.TWILIO_PHONE;
const api = config.twilio.TWILIO_API;

export default class ChatService extends Service {
    @tracked currentChat = null;

    getChatList(){
        this.chatList = chatsListExample;
        return this.chatList;
    }

    getChatDetails(user_id){
        return chatsListExample.filter(item =>  item.contact_id == user_id)[0];
    }

    @action
    setCurrentChat(user_id){
        this.currentChat = this.getChatDetails(user_id);
        console.log(this.currentChat)
    }

    async sendMessage(to) {
        const body = new URLSearchParams();
        body.append("Body", "Hi there!");
        body.append("To", to);
        body.append("From", phone);

        const response = await fetch(`${api}/${accountSid}/Messages.json`, {
            method: 'post',
            body: body,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: 'Basic ' + btoa(accountSid + ":" + authToken)
            }
        });

        console.log(response)
    }

    async getConversationByPhone (phone) {
        const response = await fetch(`${api}/${accountSid}/Messages.json?To=${phone}&PageSize=20`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: 'Basic ' + btoa(accountSid + ":" + authToken)
            }
        });

        console.log(response)
    }
}
