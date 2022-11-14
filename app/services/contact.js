import Service from '@ember/service';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  setDoc,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore/lite';
import config from '../config/environment';

const app = initializeApp(config.firebase);
const db = getFirestore(app);
const dbRef = collection(db, 'contacts');

export default class ContactService extends Service {
  async getContactsList() {
    const contactSnapshot = await getDocs(dbRef);
    const contactsList = contactSnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    return contactsList;
  }

  async getContactById(id) {
    const contactsRef = collection(db, 'contacts', id);
    const contact = await getDoc(contactsRef);
    return contact.data();
  }

  async addContact(contact) {
    return addDoc(dbRef, contact);
  }

  async updateContact(id, newData) {
    const contactsRef = collection(db, 'contacts', id);
    setDoc(contactsRef, newData)
      .then((docRef) => {
        console.log('Entire Document has been updated successfully');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async setContactConversationSid(id, sid) {
    const contactsRef = doc(db, 'contacts', id);
    const data = {
      conversationSid: sid,
    };

    updateDoc(contactsRef, data)
      .then((docRef) => {
        console.log('Entire Document has been updated successfully', docRef);
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }

  async deleteContact(id) {
    const contactsRef = doc(db, 'contacts', id);
    return deleteDoc(contactsRef);
  }
}
