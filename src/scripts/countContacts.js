import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  {
    try {
      const contacts = await readContacts();
      const countContacts = contacts.length;
      return countContacts;
    } catch (error) {
      console.error(error);
    }
  }
};
countContacts();
console.log(await countContacts());
