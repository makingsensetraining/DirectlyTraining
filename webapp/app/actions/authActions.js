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

/**
 * la sintaxis de arrow simplifica el boilerplate, tambien es preferible usarla siempre que sea posible por consistencia.
 * --
 * export const loginSuccess = user => ({ type: AUTH_LOGIN_SUCCESS, user });
 * --
 */


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

/**
 * en caso de recibir parametros, es preferible recibir simpre "payload" para no depender del orden y mantener consistentes las acciones.
 * Eso puede generar problemas de claridad en JS plano (considerar typescript), pero la misma falta de definicion de tipos
 * hace que puedan simplemente dejar un comment al lado de cada accion con el tipo correspondiente. ej:
 * --
 * export const login(payload)... // { username: string; password: string }
 * --
 */


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
