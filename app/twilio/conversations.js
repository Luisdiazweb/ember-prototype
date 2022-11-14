import config from '../config/environment';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, updateDoc } from 'firebase/firestore/lite';

const app = initializeApp(config.firebase);
const db = getFirestore(app);

const TWILIO_AUTHENTICATION =
  'Basic ' +
  btoa(
    `${config.twilio.TWILIO_ACCOUNT_SID}:${config.twilio.TWILIO_AUTH_TOKEN}`
  );

/**
 * This function creates a new conversation with the contact, should be called when a new contact is added.
 * @param contact
 * @returns {Promise<void>}
 */
export async function createConversation(contact) {
  try {
    const response = await fetch(
      'https://conversations.twilio.com/v1/Conversations',
      {
        method: 'POST',
        headers: {
          Authorization: TWILIO_AUTHENTICATION,
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        body: new URLSearchParams({
          FriendlyName: 'Conversation with ' + contact.name,
          UniqueName: config.twilio.TWILIO_PHONE + '_' + contact.phone,
        }),
      }
    );
    const body = await response.json();
    if (!response.ok) {
      // fire an error message
      console.log(response.status, body.message);
      return;
    }
    if (!('sid' in body)) {
      console.log('Conversation SID not found');
      return;
    }
    await setContactConversationSid(contact.id, body.sid);
    await addConversationParticipant(body.sid, contact.phone);
    console.log(response, body);
  } catch (error) {
    console.log(error);
  }
}

/**
 * This function deletes an existent conversation with a contact, should be called when the contact is deleted.
 * @param sid comes from `contact.conversationSid`
 * @returns {Promise<any>}
 */
export async function deleteConversation(sid) {
  try {
    const response = await fetch(
      `https://conversations.twilio.com/v1/Conversations/${sid}`,
      {
        method: 'delete',
        headers: {
          Authorization: TWILIO_AUTHENTICATION,
        },
      }
    );
    return await response.json();
  } catch (e) {
    console.log(e);
  }
}

/**
 * Read multiple Conversation resources.
 * @param pageSize number of conversations per page.
 * @returns {Promise<any>}
 */
export async function getAllConversations(pageSize = 20) {
  try {
    const response = await fetch(
      `https://conversations.twilio.com/v1/Conversations?PageSize=${pageSize}`,
      {
        method: 'get',
        headers: {
          Authorization: TWILIO_AUTHENTICATION,
        },
      }
    );
    return await response.json();
  } catch (e) {
    console.log(e);
  }
}

/**
 * This function allows to add a participant to a new conversation, is called inside the `createConversation` function, just after to create a new contact.
 * @param sid
 * @param phone
 * @returns {Promise<any>}
 */
export async function addConversationParticipant(sid, phone) {
  try {
    const response = await fetch(
      `https://conversations.twilio.com/v1/Conversations/${sid}/Participants`,
      {
        method: 'POST',
        headers: {
          Authorization: TWILIO_AUTHENTICATION,
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        body: new URLSearchParams({
          'MessagingBinding.Address': phone,
          'MessagingBinding.ProxyAddress': config.twilio.TWILIO_PHONE,
        }),
      }
    );
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function addConversationMessage(sid, message) {
  try {
    const response = await fetch(
      `https://conversations.twilio.com/v1/Conversations/${sid}/Messages`,
      {
        method: 'post',
        headers: {
          Authorization: TWILIO_AUTHENTICATION,
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        body: new URLSearchParams({
          Author: config.twilio.TWILIO_PHONE,
          Body: message,
        }),
      }
    );
    return await response.json();
  } catch (e) {
    console.log(e);
  }
}

export async function getContactConversationMessages(sid) {
  try {
    const response = await fetch(
      `https://conversations.twilio.com/v1/Conversations/${sid}/Messages`,
      {
        method: 'get',
        headers: {
          Authorization: TWILIO_AUTHENTICATION,
        },
      }
    );
    return await response.json();
  } catch (e) {
    console.log(e);
  }
}

async function setContactConversationSid(id, sid) {
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
