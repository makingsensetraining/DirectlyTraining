import { push } from 'react-router-redux';
import actionTypes from '../actions/actionTypes';
import * as authService from '../services/authService';

const { AUTH } = actionTypes;

export function loginRequest() {
  return {
    type: AUTH.LOGIN_REQUEST
  };
}

export function loginSuccess(user) {
  return {
    type: AUTH.LOGIN_SUCCESS,
    user
  };
}

export function loginError(error) {
  return {
    type: AUTH.LOGIN_ERROR,
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
        error => dispatch(loginError(error))
      );
  };
}
