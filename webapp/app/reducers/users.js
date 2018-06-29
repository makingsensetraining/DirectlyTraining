import { handleActions } from 'redux-actions';
import actionTypes from '../actions/actionTypes';

const { USERS } = actionTypes;
const fetch = {
  pending: false,
  error: false
};
const initialState = {
  data: [],
  selectedUser: {},
  fetch
};

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
    fetch
  }),
  [`${USERS.GET_ALL}_REJECTED`]: state => ({
    ...state,
    fetch: {
      pending: false,
      error: true
    }
  }),
  [USERS.SELECT]: (state, action) => ({
    ...state,
    selectedUser: action.payload
  })
}, initialState);
