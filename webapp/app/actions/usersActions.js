import { createAction } from 'redux-actions';
import actionTypes from '../actions/actionTypes';
import identity from 'lodash/identity';
import {
  createUsers,
  deleteUsers,
  fetchUsers,
  updateUsers
} from '../services/userService';

const { USERS } =  actionTypes;

export const selectUser = createAction(USERS.SELECT);
export const getUsers = createAction(USERS.GET_ALL, (queryParams = {
  page: 1,
  limit: 100
}) => {
  return {
    promise: fetchUsers(queryParams)
  };
}, identity);

export const createUser = createAction(USERS.CREATE, user => {
  return {
    promise: createUsers(user)
  };
}, identity);

export const updateUser = createAction(USERS.UPDATE, user => {
  return {
    promise: updateUsers(user)
  };
}, identity);

export const deleteUser = createAction(USERS.DELETE, user => {
  return {
    promise: deleteUsers(user)
  };
}, identity);
