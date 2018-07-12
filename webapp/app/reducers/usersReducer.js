import {
  GET_USERS_SUCCESS,
  LOADING_USERS_BEGIN,
  LOADING_USERS_COMPLETE,
  LOADING_USERS_FAILED,
  CREATE_USERS_SUCCESS,
  DELETE_USERS_SUCCESS,
  UPDATE_USERS_SUCCESS,
  SELECT_USERS_SUCCESS
} from '../actions/actionTypes';
import { getUserId } from '../utils';
import { createReducer } from '../utils';
import initialState from './initialState';

export const users = createReducer(initialState.users, {
  [GET_USERS_SUCCESS](state, { users }) {
    return {
      ...state,
      data: users
    };
  },
  [CREATE_USERS_SUCCESS](state, { user }) {
    return {
      ...state,
      data: [
        user,
        ...state.data
      ]
    };
  },
  [DELETE_USERS_SUCCESS](state, { user }) {
    return {
      ...state,
      data: state.data.filter(sourceUser => getUserId(user) !== getUserId(sourceUser))
    };
  },
  [UPDATE_USERS_SUCCESS](state, { user }) {
    return {
      ...state,
      data: [
        user,
        ...state.data.filter(sourceUser => getUserId(user) !== getUserId(sourceUser))
      ]
    };
  },
  [SELECT_USERS_SUCCESS](state, { user }) {
    return {
      ...state,
      selectedUser: user
    };
  },
  [LOADING_USERS_BEGIN](state) {
    return {
      ...state,
      fetch: {
        loading: true,
        error: null
      }
    };
  },
  [LOADING_USERS_COMPLETE](state) {
    return {
      ...state,
      fetch: {
        loading: false,
        error: null
      }
    };
  },
  [LOADING_USERS_FAILED](state, { error }) {
    return {
      ...state,
      fetch: {
        loading: false,
        error: error
      }
    };
  }
});
