import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class HomeContactsController extends Controller {
    @tracked contactsList = [
        {
            id: 1,
            name: "Carlos",
            lastname: "Moto"
        },
        {
            id: 2,
            name: "Luis",
            lastname: "Díaz"
        },
        {
            id: 3,
            name: "José",
            lastname: "Hernández"
        },
        {
            id: 4,
            name: "Kevin",
            lastname: "Sorto"
        }
    ];

    get orderedContacts(){
        let lettersList = [...new Set(this.contactsList.map(item =>  item.name[0]).sort(function(a, b){
            if(a < b) { return -1; }
            if(a > b) { return 1; }
            return 0;
        }))];
        let contactsOrderedList = [];
        for (let index = 0; index < lettersList.length; index++) {
            const element = lettersList[index];
            contactsOrderedList.push({
                letter: element,
                contacts: this.contactsList.filter(item => item.name[0] == element)
            });
        }
        console.log(contactsOrderedList);
        return contactsOrderedList;
    }
}
