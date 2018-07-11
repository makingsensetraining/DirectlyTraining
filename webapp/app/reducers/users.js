import { createReducer } from '../utils';
import { SET_USERS } from '../actions';

export const users = createReducer([], {
  [SET_USERS](state, { users }) {
    return users;
  }
});
