import configureStore from 'redux-mock-store';
import promiseMiddleware from 'redux-promise-middleware';
import {
getUsers,
selectUser
} from './usersActions';
import actionTypes from '../actions/actionTypes';
import * as userService from '../services/userService';
const { USERS } = actionTypes;

describe('usersActions', () => {
  const middlewares = [promiseMiddleware()];
  const mockStore = configureStore(middlewares);

  it('should create an action to get users', () => {
    // Arramge
    const expectedActions = [
      { type: 'USERS/GET_ALL_PENDING' },
      { type: 'USERS/GET_ALL_FULFILLED', payload: 'the response' }
    ];
    const initalState = {};
    userService.fetchUsers = jest.fn().mockReturnValue(
      Promise.resolve('the response')
    );
    // Act
    const store = mockStore(initalState);
    store.dispatch(getUsers()).then(() => {
      // Assert
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should create an action to select a user', () => {
    const result = selectUser();

    expect(result).toEqual(expect.objectContaining({
      type: USERS.SELECT
    }));
  });
});
