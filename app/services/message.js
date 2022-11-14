import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import messagesListExample from '../staticData/messages';

export default class MessageService extends Service {
  @tracked messagesList = [];

  initializeMessages() {
    this.messagesList = messagesListExample;
  }

  getMessages(from, to) {
    this.initializeMessages();
    let messages = this.messagesList.filter(
      (message) =>
        (message.from == from && message.to == to) ||
        (message.from == to && message.to == from)
    );
    return messages;
  }
}
