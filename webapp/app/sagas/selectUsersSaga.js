import { takeLatest, put } from 'redux-saga/effects';
import { SELECT_USER_BEGIN } from '../actions/actionTypes';
import { selectUserSuccess } from '../actions';

export function* selectUsersStart({ user }) {
  yield put(selectUserSuccess(user));
}

export function* selectUsersSaga() {
  yield takeLatest(SELECT_USER_BEGIN, selectUsersStart);
}
