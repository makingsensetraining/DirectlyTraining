import { createAction } from 'redux-actions';
import actionTypes from '../actions/actionTypes';
import identity from 'lodash/identity';
import get from 'lodash/get';
import omit from 'lodash/omit';
import {
  createUsers,
  deleteUsers,
  fetchUsers,
  updateUsers
} from '../services/userService';

const DEFAULT_USER_VALID_ID_PATHS = ['_id', 'id'];
const DEFAULT_PAGINATION_QUERY = { page: 1, limit: 100 };
const { USERS } =  actionTypes;

function getUserId(user = {}) {
  let userId = get(user, '_id', undefined);

  if (!userId) {
    userId = get(user, 'id');
  }

  return userId;
}

export const selectUser = createAction(USERS.SELECT);
export const getUsers = createAction(USERS.GET_ALL, (queryParams = DEFAULT_PAGINATION_QUERY) => {
  return {
    promise: fetchUsers(queryParams)
  };
}, identity);

export const createUser = createAction(USERS.CREATE, userData => {
  return {
    promise: createUsers(omit(userData, DEFAULT_USER_VALID_ID_PATHS))
  };
}, identity);

export const updateUser = createAction(USERS.UPDATE, user => {
  return {
    promise: updateUsers(getUserId(user), omit(user, DEFAULT_USER_VALID_ID_PATHS))
  };
}, identity);

export const deleteUser = createAction(USERS.DELETE, user => {
  return {
    promise: deleteUsers(getUserId(user))
  };
}, identity);
