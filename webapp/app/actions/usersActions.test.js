import {
  getUsers,
  selectUser
} from './usersActions';
import actionTypes from '../actions/actionTypes';

const { USERS } = actionTypes;

describe('usersActions', () => {
  it('should create an action to get users', () => {
    const result = getUsers();

    expect(result).toEqual(expect.objectContaining({
      type: USERS.GET_ALL
    }));
  });

  it('should create an action to select a user', () => {
    const result = selectUser();

    expect(result).toEqual(expect.objectContaining({
      type: USERS.SELECT
    }));
  });
});