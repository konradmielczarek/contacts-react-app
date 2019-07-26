import {
  GET_CONTACTS_REQUESTED,
  GET_CONTACTS_RELOADING,
  GET_CONTACTS_DONE,
  GET_CONTACTS_FAILED,
  SET_CURRENT_LIMIT
} from '../../actions/actionTypes';

const initialState = {
  contacts: [],
  totalContacts: 0,
  initialLimit: 6,
  currentLimit: 6,
  GET_CONTACTS_PENDING: false,
  GET_CONTACTS_ERROR: false,
  GET_CONTACTS_RELOADING: false
};

export const getContactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS_REQUESTED:
      return { ...state, GET_CONTACTS_PENDING: true };

    case GET_CONTACTS_RELOADING:
      return { ...state, GET_CONTACTS_RELOADING: true };

    case GET_CONTACTS_DONE:
      return {
        ...state,
        GET_CONTACTS_PENDING: false,
        GET_CONTACTS_RELOADING: false,
        contacts: action.payload.data,
        totalContacts: parseInt(action.payload.headers['x-total-count'])
      };

    case GET_CONTACTS_FAILED:
      return { ...state, GET_CONTACTS_PENDING: false, GET_CONTACTS_ERROR: true };

    case SET_CURRENT_LIMIT:
      return { ...state, currentLimit: action.payload };

    default:
      return state;
  }
};