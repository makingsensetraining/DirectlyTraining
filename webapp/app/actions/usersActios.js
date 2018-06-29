import { createAction } from 'redux-actions';
import actionTypes from '../actions/actionTypes';
import identity from 'lodash/identity';
import { fetchUsers } from '../services/userService';

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
