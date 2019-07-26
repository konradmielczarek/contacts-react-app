import { combineReducers } from 'redux';
import { getContactsReducer } from './contacts/getContactsReducer';
import { addContactReducer } from './contacts/addContactReducer';

export default combineReducers({
  getContacts: getContactsReducer,
  addContact: addContactReducer
});

