import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class HomeContactsController extends Controller {
  @service contact;
  @tracked contactsList = [];

  @tracked searchInput = '';
    constructor() {
        super(...arguments);
        this.contact.getContactsList().then(contacts => this.contactsList = contacts)
    }

    get orderedContacts() {
    // get contacts list
    // this.contact.addContact({
    //     name: 'José',
    //     lastname: 'Hernández',
    //     phone: 3189739014
    // })
    // this.contact.getContactsList().then(r => this.contactsList = r)
    
    let lettersList = [
      ...new Set(
        this.contactsList
          .map((item) => item.name[0])
          .sort(function (a, b) {
            if (a < b) {
              return -1;
            }
            if (a > b) {
              return 1;
            }
            return 0;
          })
      ),
    ];
    let contactsOrderedList = [];
    for (let index = 0; index < lettersList.length; index++) {
      const element = lettersList[index];
      contactsOrderedList.push({
        letter: element,
        contacts: this.contactsList.filter((item) => item.name[0] == element),
      });
    }
    console.log(contactsOrderedList);
    return contactsOrderedList;
  }

  get displayedContacts() {
    if (this.searchInput.length > 0) {
      let filteredContacts = this.orderedContacts.filter((item) => {
        let condition = false;
        item.contacts.map((contact) => {
          if (
            contact.name
              .toString()
              .toLowerCase()
              .includes(this.searchInput.toString().toLowerCase()) ||
            contact.lastname
              .toString()
              .toLowerCase()
              .includes(this.searchInput.toString().toLowerCase())
          ) {
            condition = true;
          }
        });

        return condition;
      });

      return filteredContacts.map((item) => {
        return {
          ...item,
          contacts: item.contacts.filter(
            (contact) =>
              contact.name
                .toString()
                .toLowerCase()
                .includes(this.searchInput.toString().toLowerCase()) ||
              contact.lastname
                .toString()
                .toLowerCase()
                .includes(this.searchInput.toString().toLowerCase())
          ),
        };
      });
    } else {
      return this.orderedContacts;
    }
  }

  @action
  updateSearchInput(event) {
    this.searchInput = event.target.value.toString();
  }
}
