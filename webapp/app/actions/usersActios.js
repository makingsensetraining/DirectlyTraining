import { createAction } from 'redux-actions';
import actionTypes from '../constants/actionTypes';
import { identity } from 'lodash/fp';
import * as usersApi from '../api/users';

const { USERS } =  actionTypes;

export const selectUser = createAction(USERS.SELECT);

export const getUsers = createAction(USERS.GET_ALL, () => {
  const promise = usersApi.fetchUsers();

  return { promise };
}, identity);
