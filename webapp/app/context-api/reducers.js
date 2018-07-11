import {
  AUTH_LOGIN_BEGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILED,
  LOADING_USERS_BEGIN,
  LOADING_USERS_COMPLETE,
  LOADING_USERS_FAILED,
  CREATE_USERS_SUCCESS,
  GET_USERS_SUCCESS,
  DELETE_USERS_SUCCESS,
  UPDATE_USERS_SUCCESS,
  SELECT_USERS_SUCCESS
} from './actions/actionTypes';
import { getUserId } from '../utils/user';

export const reducers = (state, action) => {
  let newState = {
    ...state
  };
  switch (action.type) {
      newState.auth.authenticating = true;

      return newState;

    case AUTH_LOGIN_SUCCESS:
      newState.auth.isAuthenticated = true;
      newState.auth.user = action.user;

      return newState;

    case AUTH_LOGIN_FAILED:
      newState.auth.error = true;
      newState.auth.errorMessage = true;

      return newState;

    case CREATE_USERS_SUCCESS:
      newState.users.data = [
        action.payload,
        ...newState.users.data
      ];

      return newState;

    case DELETE_USERS_SUCCESS:
      newState.users.data = state.data.filter(
        user => getUserId(action.payload) !== getUserId(user)
      );

      return newState;

    case GET_USERS_SUCCESS:
      newState.users.data = action.payload.users;

      return newState;

    case SELECT_USERS_SUCCESS:
      newState.users.selectedUser = action.payload;

      return newState;

    case UPDATE_USERS_SUCCESS:
      newState.users.data = [
        action.payload,
        ...newState.data.filter(
          user => getUserId(action.payload) !== getUserId(user)
        )
      ];

      return newState;

    case LOADING_USERS_BEGIN:
      newState.users.fetch = {
        error: null,
        loading: true
      };

      return newState;

    case LOADING_USERS_COMPLETE:
      newState.users.fetch = {
        error: null,
        loading: false
      };

      return newState;

    case LOADING_USERS_FAILED:
      newState.users.fetch = {
        error: action.payload.error,
        loading: false
      };

      return newState;

    default:
      return state;
  }
};
