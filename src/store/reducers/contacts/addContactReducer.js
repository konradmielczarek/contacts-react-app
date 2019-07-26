import {
  ADD_CONTACT_REQUESTED,
  ADD_CONTACT_DONE,
  ADD_CONTACT_FAILED
} from '../../actions/actionTypes';

const initialState = {
  ADD_CONTACT_PENDING: false,
  ADD_CONTACT_ERROR: false
};

export const addContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT_REQUESTED:
      return { ...state, ADD_CONTACT_PENDING: true };

    case ADD_CONTACT_DONE:
      return { ...state, ADD_CONTACT_PENDING: false };

    case ADD_CONTACT_FAILED:
      return { ...state, ADD_CONTACT_PENDING: false, ADD_CONTACT_ERROR: true };

    default:
      return state;
  }
};