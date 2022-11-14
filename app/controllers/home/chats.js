import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Swal from 'sweetalert2';
import {
  createConversation
} from '../../twilio/conversations';

export default class HomeChatsController extends Controller {
  @tracked searchValue = '';
  @tracked chatList = [];
  @tracked contactsList = [];
  @tracked loadingChats = true;
  @tracked loadingContacts = true;
  @tracked selectedChatUser = null;

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
      newList = this.chatList.filter(
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

  get newChatUserName(){
    if(this.selectedUser){
      return `${this.selectedChatUser.name} ${this.selectedChatUser.lastname}`
    }else{
      return '';
    }
  }

  get existsNewChatUser(){
    return this.selectedChatUser == null;
  }

  @action
  updateSearchValue(event) {
    this.searchValue = event.target.value.toString();
  }

  @action
  setSelectedUser(event){
    console.log(event.target.value);
    this.selectedChatUser = this.contactsList.filter(item => item.id == event.target.value)[0];
    console.log(this.selectedChatUser);
  }

  @action
  async createNewConversation(){
    await createConversation({
      ...this.selectedChatUser
    }).then(response => {
      console.log(response);
      document.getElementById('my-modal-conversation').checked = false;
      this.restoreCreateAction();
      Swal.fire({
        title: "Successfully created!",
        icon: "success"
      });
    })
    .catch(error => {
      console.error(error);
      document.getElementById('my-modal-conversation').checked = false;
      Swal.fire({
        title: "Error creating a conversation!",
        text: error.toString(),
        icon: "error"
      })
    });
  }

  restoreCreateAction(){
    this.selectedChatUser = null;
    document.getElementById('contacts_selector').selectedIndex = 0;
  }
}
