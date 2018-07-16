import {
  LOADING_USERS_BEGIN,
  LOADING_USERS_COMPLETE,
  GET_USERS_BEGIN,
  GET_USERS_SUCCESS,
  DELETE_USERS_BEGIN,
  DELETE_USERS_SUCCESS,
  SELECT_USER_BEGIN,
  SELECT_USER_SUCCESS
} from '../actions/actionTypes';
import { makeActionCreator } from '../utils';

export const loadingUsersBegin = makeActionCreator(LOADING_USERS_BEGIN);
export const loadingUsersComplete = makeActionCreator(LOADING_USERS_COMPLETE);
export const getUsersSuccess = makeActionCreator(GET_USERS_SUCCESS, 'users');
export const getUsers = makeActionCreator(GET_USERS_BEGIN);
export const deleteUsersSuccess = makeActionCreator(DELETE_USERS_SUCCESS, 'user');
export const deleteUsers = makeActionCreator(DELETE_USERS_BEGIN, 'user');
export const selectUser = makeActionCreator(SELECT_USER_BEGIN, 'user');
export const selectUserSuccess = makeActionCreator(SELECT_USER_SUCCESS, 'user');
