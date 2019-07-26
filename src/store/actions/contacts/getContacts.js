import axios from 'axios';
import {
  GET_CONTACTS_REQUESTED,
  GET_CONTACTS_RELOADING,
  GET_CONTACTS_DONE,
  GET_CONTACTS_FAILED,
  SET_CURRENT_LIMIT
} from '../actionTypes';

const apiUrl = process.env.REACT_APP_API_URL;

export const getContactsRequested = () => ({
  type: GET_CONTACTS_REQUESTED
});

export const getContactsReloading = () => ({
  type: GET_CONTACTS_RELOADING
});

export const getContactsDone = data => ({
  type: GET_CONTACTS_DONE,
  payload: data
});

export const getContactsFailed = error => ({
  type: GET_CONTACTS_FAILED,
  payload: error
});

export const getContacts = (limit = 6, page = 1) => async (dispatch) => {
  try {
    limit === 6 ?
      dispatch(getContactsRequested()) :
      dispatch(getContactsReloading())

    const response = await axios.get(
      `${apiUrl}/contacts?_limit=${limit}&_page=${page}`
    );
    dispatch(getContactsDone(response));
  } catch (err) {
    dispatch(getContactsFailed(err))
  }
};

export const setCurrentLimit = limit => ({
  type: SET_CURRENT_LIMIT,
  payload: limit
});