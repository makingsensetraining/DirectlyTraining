import { createAction } from 'redux-actions';
import actionTypes from '../constants/actionTypes';

const { USERS } =  actionTypes;

export const getUsers = createAction(USERS.GET_ALL);
