import axios from 'axios';
import { getContacts } from "./getContacts";
import {
  ADD_CONTACT_REQUESTED,
  ADD_CONTACT_DONE,
  ADD_CONTACT_FAILED
} from '../actionTypes';

const apiUrl = process.env.REACT_APP_API_URL;

export const addContactRequested = () => ({
  type: ADD_CONTACT_REQUESTED
});

export const addContactDone = contact => ({
  type: ADD_CONTACT_DONE,
  payload: contact
});

export const addContactFailed = error => ({
  type: ADD_CONTACT_FAILED,
  payload: error
});

export const addContact = contact => {
  return (dispatch, getState) => {
    dispatch(addContactRequested());
    setTimeout(() => {
      axios.post(
        `${apiUrl}/contacts`,
        contact
      )
        .then(response => {
          dispatch(addContactDone(response.data));
          dispatch(getContacts(getState().getContacts.currentLimit))
        })
        .catch(err => {
          dispatch(addContactFailed(err));
        })
    }, 1000);
  }
};