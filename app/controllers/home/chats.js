import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class HomeChatsController extends Controller {
  @tracked searchValue = '';
  @tracked chatList = [];

  get contactListDisplayed() {
    let newList = this.chatsList;
    if (this.searchValue.toString().length > 0) {
      newList = this.chatsList.filter(
        (item) =>
          item.name
            .toString()
            .toLowerCase()
            .includes(this.searchValue.toString().toLowerCase()) ||
          item.lastname
            .toString()
            .toLowerCase()
            .includes(this.searchValue.toString().toLowerCase())
      );
    }
    return newList;
  }

  @action
  updateSearchValue(event) {
    console.log('Search active');
    this.searchValue = event.target.value.toString();
  }
}
