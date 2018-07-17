import {
  DELETE_USERS_SUCCESS,
  GET_USERS_SUCCESS,
  LOADING_USERS_BEGIN,
  LOADING_USERS_COMPLETE,
  LOADING_USERS_FAILED,
  CREATE_USERS_SUCCESS,
  UPDATE_USERS_SUCCESS,
  SELECT_USER_SUCCESS
} from '../actions/actionTypes';
import { getUserId } from '../utils';
import { createReducer } from '../utils';
import initialState from './initialState';

export const users = createReducer(initialState.users, {
  [GET_USERS_SUCCESS](state, { users }) {
    return {
      ...state,
      data: users,
      selectedUser: {}
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
      data: state.data.filter(sourceUser => getUserId(user) !== getUserId(sourceUser)),
      selectedUser: {}
    };
  },
  [UPDATE_USERS_SUCCESS](state, { user }) {
    return {
      ...state,
      data: [
        user,
        ...state.data.filter(sourceUser => getUserId(user) !== getUserId(sourceUser))
      ],
      selectedUser: {}
    };
  },
  [SELECT_USER_SUCCESS](state, { user }) {
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
