import {
  LOADING_USERS_BEGIN,
  LOADING_USERS_COMPLETE,
  GET_USERS_SUCCESS
} from '../actions/actionTypes';
import { makeActionCreator } from '../utils';

export const loadingUsersBegin = makeActionCreator(LOADING_USERS_BEGIN);
export const loadingUsersComplete = makeActionCreator(LOADING_USERS_COMPLETE);
export const getUsersSuccess = makeActionCreator(GET_USERS_SUCCESS, 'users');
