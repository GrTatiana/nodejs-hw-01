import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  {
    try {
      const emptyArrayContacts = [];
      await writeContacts(emptyArrayContacts);
    } catch (error) {
      console.error(error);
    }
  }
};

removeAllContacts();
