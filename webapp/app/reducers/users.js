import { handleActions } from 'redux-actions';
import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

const { USERS } = actionTypes;

export default handleActions({
  [`${USERS.GET_ALL}_PENDING`]: state => ({
    ...state,
    fetch: {
      ...state.fetch,
      pending: true
    }
  }),
  [`${USERS.GET_ALL}_FULFILLED`]: (state, action) => ({
    ...state,
    data: action.payload.data.docs,
    fetch: initialState.users.fetch
  }),
  [`${USERS.GET_ALL}_REJECTED`]: state => ({
    ...state,
    fetch: {
      ...state.fetch,
      pending: false,
      error: true
    }
  }),
  [USERS.SELECT]: (state, action) => {
    return ({
      ...state,
      selectedUser: action.payload
    });
  }
}, initialState.users);
