import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();
    for (let i = 1; i <= number; i += 1) {
      contacts.push(createFakeContact());
    }
    await writeContacts(contacts);
  } catch (error) {
    console.error(error);
  }
};

generateContacts(7);
