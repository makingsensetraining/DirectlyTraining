import { handleActions } from 'redux-actions';
import actionTypes from '../actions/actionTypes';
import initialState from './initialState';
import { getUserId } from '../utils/user';

const { USERS } = actionTypes;
const usersInitialState = initialState.users;

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
    fetch: usersInitialState.fetch
  }),
  [`${USERS.GET_ALL}_REJECTED`]: state => ({
    ...state,
    fetch: {
      ...usersInitialState.fetch,
      error: true
    }
  }),
  [USERS.SELECT]: (state, action) => {
    return ({
      ...state,
      selectedUser: action.payload
    });
  },
  [`${USERS.CREATE}_PENDING`]: state => ({
    ...state,
    fetch: {
      ...state.fetch,
      pending: true
    }
  }),
  [`${USERS.CREATE}_FULFILLED`]: (state, action) => ({
    ...state,
    data: [
      ...state.data,
      ...action.payload
    ],
    fetch: usersInitialState.fetch
  }),
  [`${USERS.CREATE}_REJECTED`]: state => ({
    ...state,
    fetch: {
      ...usersInitialState.fetch,
      error: true
    }
  }),
  [`${USERS.DELETE}_PENDING`]: state => ({
    ...state,
    fetch: {
      ...state.fetch,
      pending: true
    }
  }),
  [`${USERS.DELETE}_FULFILLED`]: (state, action) => ({
    ...state,
    data: state.data.filter(user => getUserId(action.payload) !== getUserId(user)),
    fetch: usersInitialState.fetch
  }),
  [`${USERS.DELETE}_REJECTED`]: state => ({
    ...state,
    fetch: {
      ...usersInitialState.fetch,
      error: true
    }
  })
}, usersInitialState);
