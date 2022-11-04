import Service from '@ember/service';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, getDoc, addDoc, setDoc, deleteDoc } from 'firebase/firestore/lite';
import config from '../config/environment';

const app = initializeApp(config.firebase);
const db = getFirestore(app);
const dbRef = collection(db, 'contacts');

export default class ContactService extends Service {

    async getContactsList() {
        const contactSnapshot = await getDocs(dbRef);
        const contactsList = contactSnapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            }
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
        return deleteDoc(docRef, data);
    }
}