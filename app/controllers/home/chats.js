import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class HomeChatsController extends Controller {
  @tracked chatsList = [
    {
      contact_id: 1,
      name: 'Testing User 1',
      image: null,
    },
    {
      contact_id: 2,
      name: 'Testing User 2',
      image: 'https://placeimg.com/192/192/people',
    },
    {
      contact_id: 3,
      name: 'Testing User 3',
      image: null,
    },
  ];
  @tracked searchValue = '';

  get contactListDisplayed(){
    let newList = this.chatsList;
    if(this.searchValue.toString().length > 0){
        newList = this.chatsList.filter(item => item.name.toString().toLowerCase().includes(this.searchValue.toString().toLowerCase()));
    }
    return newList;
  }

  @action
  updateSearchValue(event){
    console.log("Search active");
    this.searchValue = event.target.value.toString();
  }
}
