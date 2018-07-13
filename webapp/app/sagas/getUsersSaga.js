import { takeLatest, put, call } from 'redux-saga/effects';
import { DEFAULT_PAGINATION_QUERY } from '../constants';

import {
  GET_USERS_BEGIN,
  LOADING_USERS_BEGIN,
  LOADING_USERS_COMPLETE
} from '../actions/actionTypes';
import {
  getUsersSuccess,
  loadingUsersBegin,
  loadingUsersComplete
} from '../actions';

import { fetchUsers } from '../services/userService';

// TODO implement failure
export function* getUsersStart({ queryParams = DEFAULT_PAGINATION_QUERY }) {
  yield put(loadingUsersBegin(LOADING_USERS_BEGIN));
  const response = yield call(fetchUsers, queryParams);
  yield put(getUsersSuccess(response.data.docs));
  yield put(loadingUsersComplete(LOADING_USERS_COMPLETE));
}

export function* getUsersSaga() {
  yield takeLatest(GET_USERS_BEGIN, getUsersStart);
}
