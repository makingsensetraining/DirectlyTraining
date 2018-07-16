import { takeLatest, put } from 'redux-saga/effects';
import { SELECT_USER } from '../actions/actionTypes';
import { selectUser } from '../actions';

export function* selectUsersStart({ user }) {
  yield put(selectUser(user));
}

export function* selectUsersSaga() {
  yield takeLatest(SELECT_USER, selectUsersStart);
}
