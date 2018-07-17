import {
  LOADING_USERS_BEGIN,
  LOADING_USERS_COMPLETE,
  CREATE_USERS_BEGIN,
  CREATE_USERS_SUCCESS,
  GET_USERS_BEGIN,
  GET_USERS_SUCCESS,
  DELETE_USERS_BEGIN,
  DELETE_USERS_SUCCESS,
  SELECT_USER_BEGIN,
  SELECT_USER_SUCCESS,
  UPDATE_USERS_BEGIN,
  UPDATE_USERS_SUCCESS
} from '../actions/actionTypes';
import { makeActionCreator } from '../utils';

export const loadingUsersBegin = makeActionCreator(LOADING_USERS_BEGIN);
export const loadingUsersComplete = makeActionCreator(LOADING_USERS_COMPLETE);
export const createUsers = makeActionCreator(CREATE_USERS_BEGIN, 'user');
export const createUsersSuccess = makeActionCreator(CREATE_USERS_SUCCESS, 'user');
export const getUsers = makeActionCreator(GET_USERS_BEGIN);
export const getUsersSuccess = makeActionCreator(GET_USERS_SUCCESS, 'users');
export const deleteUsers = makeActionCreator(DELETE_USERS_BEGIN, 'user');
export const deleteUsersSuccess = makeActionCreator(DELETE_USERS_SUCCESS, 'user');
export const selectUser = makeActionCreator(SELECT_USER_BEGIN, 'user');
export const selectUserSuccess = makeActionCreator(SELECT_USER_SUCCESS, 'user');
export const updateUsers = makeActionCreator(UPDATE_USERS_BEGIN, 'user');
export const updateUsersSuccess = makeActionCreator(UPDATE_USERS_SUCCESS, 'user');
