import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class HomeChatsController extends Controller {
  @tracked chatsList = [
    {
      contact_id: 1,
      name: 'Carlos',
      lastname: 'Moto',
      image: null,
    },
    {
      contact_id: 2,
      name: 'Kevin',
      lastname: 'Sorto',
      image: 'https://placeimg.com/192/192/people',
    },
    {
      contact_id: 3,
      name: 'José',
      lastname: 'Hernández',
      image: null,
    },
  ];
  @tracked searchValue = '';

  get contactListDisplayed() {
    let newList = this.chatsList;
    if (this.searchValue.toString().length > 0) {
      newList = this.chatsList.filter((item) =>
        item.name.toString().toLowerCase().includes(this.searchValue.toString().toLowerCase()) || item.lastname.toString().toLowerCase().includes(this.searchValue.toString().toLowerCase())
      );
    }
    return newList;
  }

  get recentContacts() {
    return this.chatsList.slice(0,3);
  }

  @action
  updateSearchValue(event) {
    console.log('Search active');
    this.searchValue = event.target.value.toString();
  }
}
