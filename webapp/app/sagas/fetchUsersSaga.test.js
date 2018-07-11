import {
  take,
  call,
  put,
  apply
} from 'redux-saga/effects';
import { fetchUsersSaga } from './fetchUsersSaga';
import { DEFAULT_PAGINATION_QUERY } from '../constants';
import { fetchUsers } from '../services/userService';

import {
  SET_USERS,
  setUsers
} from '../actions';

describe('Fetch Users Saga', () => {
  it('should be defined', () => {
    expect(fetchUsersSaga).toBeDefined();
  });

  it('should fetch and put the current users', () => {
    const params = DEFAULT_PAGINATION_QUERY;
    const users = [
      {
        _id: 'fake.id.john',
        name: 'John Doe' 
      },
      {
        _id: 'fake.id.jane',
        name: 'Jane Doe' 
      }
    ];
    const json = () => {};
    const response = { json };
    const gen = fetchUsersSaga();

    expect(gen.next().value).toEqual(
      take(SET_USERS)
    );

    expect(gen.next(params).value).toEqual(
      call(fetchUsers, params)
    );

    expect(gen.next(response).value).toEqual(
      apply(response, json)
    );

    expect(gen.next(users).value).toEqual(
      put(setUsers(users))
    );
  });
});
