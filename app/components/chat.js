import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class ChatComponent extends Component {
  @service('chat') chatService;
  @service('theme') themeService;

  get firstMessage(){
    let firstMessageVar = 'No messages sent';

    if(this.args.messages && this.args.messages.length > 0){
      let authtorSpan = this.args.messages[this.args.messages.length - 1].mine? 'You: ':'';
      firstMessageVar = `${authtorSpan}${this.args.messages[this.args.messages.length - 1].content}`;
    }

    return `${firstMessageVar.toString().slice(0,30)}...`;
  }

  get lastMessageDate(){
    let dateLastMessage = '';
    if(this.args.messages && this.args.messages.length > 0){
      dateLastMessage = this.args.messages[this.args.messages.length - 1].date;
    }

    return dateLastMessage;
  }
}
