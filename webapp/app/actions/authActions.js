import { push } from 'react-router-redux';
import * as authService from '../services/authService';

import {
  AUTH_LOGIN_BEGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILED
} from '../actions/actionTypes';

export function loginRequest() {
  return {
    type: AUTH_LOGIN_BEGIN
  };
}

export function loginSuccess(user) {
  return {
    type: AUTH_LOGIN_SUCCESS,
    user
  };
}

export function loginFailed(error) {
  return {
    type: AUTH_LOGIN_FAILED,
    message: error
  };
}

export function login(username, password) {
  return function (dispatch) {
    dispatch(loginRequest());
    return authService.login(username, password)
      .then(
        response => {
          dispatch(loginSuccess(response));
          dispatch(push('/'));
        },
        error => dispatch(loginFailed(error))
      );
  };
}
