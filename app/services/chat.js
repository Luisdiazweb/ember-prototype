import Service from '@ember/service';
import {tracked} from '@glimmer/tracking';
import chatsListExample from '../staticData/chats';
import { action } from '@ember/object';

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
}
