import { createAction } from 'redux-actions';
import actionTypes from '../actions/actionTypes';
import identity from 'lodash/identity';
import omit from 'lodash/omit';
import {
  createUsers,
  deleteUsers,
  fetchUsers,
  updateUsers
} from '../services/userService';
import { getUserId } from '../utils/user';

const DEFAULT_USER_VALID_ID_PATHS = ['_id', 'id'];
const DEFAULT_PAGINATION_QUERY = { page: 1, limit: 100 };
const { USERS } =  actionTypes;

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
  const userId = getUserId(user);
  return {
    promise: new Promise(resolve => {
      deleteUsers(userId).then(() => resolve(user));
    })
  };
}, identity);
