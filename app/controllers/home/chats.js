import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Swal from 'sweetalert2';
import {
  createConversation,
  addConversationMessage
} from '../../twilio/conversations';

export default class HomeChatsController extends Controller {
  @tracked searchValue = '';
  @tracked selectedChatUser = null;

  @service('contact') contactService;
  @service('chat') chatService;

  constructor(){
    super(...arguments);
    /*addConversationMessage("CHbcef6be3a8f0490c99639367fe4c6842","Hey!, this is a testing message");*/
  }

  get chatList(){
    return this.chatService.chatList;
  }

  get loadingChats(){
    return this.chatService.loading;
  }

  get contactsList(){
    return this.contactService.contactsList;
  }

  get loadingContacts(){
    return this.contactService.loading;
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
      ...this.selectedChatUser,
      phone: `+${this.selectedChatUser.phone}`
    }).then(response => {
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

    await this.contactService.getFullContacts();
    await this.chatService.getFullConversations();
  }

  restoreCreateAction(){
    this.selectedChatUser = null;
    document.getElementById('contacts_selector').selectedIndex = 0;
  }
}
