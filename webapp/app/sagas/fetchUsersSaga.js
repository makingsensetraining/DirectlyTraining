import { takeLatest, put } from 'redux-saga/effects';
import { DEFAULT_PAGINATION_QUERY } from '../constants';

import {
  SET_USERS,
  setUsers
} from '../actions';

import { fetchUsers } from '../services/userService';

function* getUsers({ queryParams = DEFAULT_PAGINATION_QUERY }) {
  const response = yield fetchUsers(queryParams);
  const { users } = yield response.json();
  yield put(setUsers(users));
}

export function* getUsersSaga() {
  yield takeLatest(SET_USERS, getUsers);
}