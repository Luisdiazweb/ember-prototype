import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import Swal from 'sweetalert2'

export default class HomeContactsController extends Controller {
  @service contact;
  @tracked contactsList = [];
  @tracked contactObject = {
    name: '',
    lastname: '',
    phone: ''
  };
  @tracked searchInput = '';
  @tracked modalOpened = false;

    constructor() {
        super(...arguments);
        this.contact.getContactsList().then(contacts => this.contactsList = contacts)
    }

    get orderedContacts() {
      console.log(this.contactsList)
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

  /* Updating contact values */
  @action
  updateContactName(event){
    const eventName = event.target.value;
    this.contactObject.name = `${eventName[0].toString().toUpperCase()}${eventName.toString().slice(1)}`;
  }

  @action
  updateContactLastname(event){
    const eventLastName = event.target.value;
    this.contactObject.lastname = `${eventLastName[0].toString().toUpperCase()}${eventLastName.toString().slice(1)}`;
  }

  @action
  updateContactPhone(event){
    this.contactObject.phone = event.target.value;
  }

  /* Manage contacts actions */
  @action
  async saveContact(event){
    event.preventDefault();

    await this.contact.addContact(this.contactObject).then(result => {
      console.log("Added");
      document.getElementById('my-modal').checked = false;
      Swal.fire({
        title: "Success",
        text: "Contact added successfully!",
        icon: 'success'
      })
    })
    .catch(error => {
      console.log("Error");
      document.getElementById('my-modal').checked = false;
      Swal.fire({
        title: "Error",
        text: "Contact cannot be added! try again.",
        icon: 'success'
      })
    });

    this.contact.getContactsList().then(contacts => this.contactsList = contacts)
    this.contactObject = {
      name: '',
      lastname: '',
      phone: ''
    }
  }
}
