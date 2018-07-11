import { createReducer } from '../utils';
import { SET_USERS } from '../actions';

export const users = createReducer([], {
  [SET_USERS](state, { data }) {
    return data;
  }
});
