import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class HomeChatsController extends Controller {
  @tracked searchValue = '';
  @tracked chatList = [];
  @tracked contactsList = [];
  @tracked loadingChats = true;
  @tracked loadingContacts = true;

  @service contact;
  @service('chat') chatService;

  constructor(){
    super(...arguments);

    /* Getting contacts for modal */
    this.loadingContacts = true;
    this.contact.getContactsList()
    .then((contacts) => {
      this.contactsList = contacts;
      this.loadingContacts = false;
    })
    .catch(error => {
      this.contactsList = [];
      this.loadingContacts = false;
    });

    /* Getting chats */
    this.loadingChats = true;
    this.chatList = this.chatService.getChatList()
    .then(response => {
      this.chatList = response;
      this.loadingChats = false;
    })
    .catch(error => {
      this.chatList = [];
      this.loadingChats = false;
    });
  }

  get contactListDisplayed() {
    let newList = this.chatList;

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
