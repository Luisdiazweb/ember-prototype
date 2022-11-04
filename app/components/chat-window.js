import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class ChatWindowComponent extends Component {
    @service('user') userService;

    get computedMessages(){
        let messages = this.args.chat.messages.map(item => {
            return {
                ...item,
                mine: item.from == this.userService.user.id
            }
        }).reverse()
        return messages;
    }
}
