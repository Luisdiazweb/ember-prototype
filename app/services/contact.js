import Service from '@ember/service';
import {tracked} from '@glimmer/tracking';
import chatsListExample from '../staticData/chats';
import { action } from '@ember/object';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, getDoc, addDoc, setDoc, deleteDoc } from 'firebase/firestore/lite';
import config from '../config/environment';

const app = initializeApp(config.firebase);
const db = getFirestore(app);
const dbRef = collection(db, 'contacts');

export default class ContactService extends Service {

    async getContactsList() {
        const contactSnapshot = await getDocs(dbRef);
        const contactsList = contactSnapshot.docs.map(doc => doc.data());
        return contactsList;
    }

    async getContactById(id) {
        const contactsRef = collection(db, 'contacts', id);
        const contact = await getDoc(contactsRef);
        return contact.data();
    }

    async addContact(contact) {
        addDoc(dbRef, contact)
            .then(docRef => {
                console.log("Document has been added successfully");
            })
            .catch(error => {
                console.log(error);
            });
    }

    async updateContact(id, newData) {
        const contactsRef = collection(db, 'contacts', id);
        setDoc(docRef, data)
            .then(docRef => {
                console.log("Entire Document has been updated successfully");
            })
            .catch(error => {
                console.log(error);
            });
    }

    async deleteContact(id) {
        const contactsRef = collection(db, 'contacts', id);
        deleteDoc(docRef, data)
            .then(docRef => {
                console.log("Entire Document has been updated successfully");
            })
            .catch(error => {
                console.log(error);
            })
    }
}