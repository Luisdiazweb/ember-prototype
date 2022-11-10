import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import moment from 'moment';

export default class ChatWindowComponent extends Component {
  @service('user') userService;

  get computedMessages() {
    let messages = this.args.chat.messages.map((item) => {
      return {
        ...item,
        mine: item.from == this.userService.user.id,
        date: this.formatDate(item.date),
        avatar: null,
        showAvatar: false,
        contactName: '',
      };
    });

    for (let index = 0; index < messages.length; index++) {
      let element = messages[index];
      let nextElement = index < messages.length ? messages[index + 1] : null;
      if (!nextElement || element.from != nextElement.from) {
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

  formatDate(date) {
    let todayDate = moment();
    let formatedDate = moment(date);
    let differenceDate = todayDate.diff(formatedDate, 'days');
    let dateNew = null;

    console.log(`today: ${todayDate} evaluated: ${formatedDate}`);
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
}
