import { createSelector } from 'reselect';

export const usersSelector = createSelector(
  state => state.users,
  users => users
);
