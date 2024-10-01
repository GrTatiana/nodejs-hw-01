import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  {
    try {
      const contacts = await readContacts();
      const contactsLength = contacts.length;
      if (contactsLength !== 0) {
        const contactsWithoutLast = contacts.slice(0, -1);
        await writeContacts(contactsWithoutLast);
      }
    } catch (error) {
      console.error(error);
    }
  }
};

removeLastContact();
