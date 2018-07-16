import { takeLatest, put, call } from 'redux-saga/effects';
import {
  DELETE_USERS_BEGIN,
  LOADING_USERS_BEGIN,
  LOADING_USERS_COMPLETE
} from '../actions/actionTypes';
import {
  deleteUsersSuccess,
  loadingUsersBegin,
  loadingUsersComplete
} from '../actions';
import { deleteUsers } from '../services/userService';
import { getUserId } from '../utils';

// TODO implement failure
export function* deleteUsersStart({ user }) {
  yield put(loadingUsersBegin(LOADING_USERS_BEGIN));
  
  // TODO implement error handling
  yield call(deleteUsers, getUserId(user));
  
  yield put(deleteUsersSuccess(user));
  yield put(loadingUsersComplete(LOADING_USERS_COMPLETE));
}

export function* deleteUsersSaga() {
  yield takeLatest(DELETE_USERS_BEGIN, deleteUsersStart);
}
