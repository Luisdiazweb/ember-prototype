import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class ChatComponent extends Component {
  @service('chat') chatService;
}
