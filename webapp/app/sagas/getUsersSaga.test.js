import {
  call,
  put,
  takeLatest
} from 'redux-saga/effects';
import {
  GET_USERS_BEGIN,
  LOADING_USERS_BEGIN,
  LOADING_USERS_COMPLETE
} from '../actions/actionTypes';
import {
  getUsersSaga,
  getUsersStart
} from './getUsersSaga';
import { DEFAULT_PAGINATION_QUERY } from '../constants';
import { fetchUsers } from '../services/userService';

import {
  getUsersSuccess,
  loadingUsersBegin,
  loadingUsersComplete
} from '../actions';

describe('Get Users Saga', () => {
  it('should be defined', () => {
    expect(getUsersSaga).toBeDefined();
    expect(getUsersStart).toBeDefined();
  });

  it('should take a users action', () => {
    const gen = getUsersSaga();

    expect(gen.next().value).toEqual(
      takeLatest(GET_USERS_BEGIN, getUsersStart)
    );
  });

  describe('Loading the users', () => {
    let getUsersGen;
    let usersResponse;

    beforeAll(() => {
      getUsersGen = getUsersStart({ queryParams: DEFAULT_PAGINATION_QUERY });
      usersResponse = {
        data: {
          docs: [
            {
              _id: 'fake.id.john',
              name: 'John Doe' 
            },
            {
              _id: 'fake.id.jane',
              name: 'Jane Doe' 
            }
          ]
        }
      };
    });

    it('should start loading', () => {
      expect(getUsersGen.next().value).toEqual(
        put(loadingUsersBegin(LOADING_USERS_BEGIN))
      );
    });

    it('should fetch the users', () => {
      expect(getUsersGen.next().value).toEqual(
        call(fetchUsers, DEFAULT_PAGINATION_QUERY)
      );
    });

    it('should put the users', () => {
      expect(getUsersGen.next(usersResponse).value).toEqual(
        put(getUsersSuccess(usersResponse.data.docs))
      );
    });

    it('should complete loading', () => {
      expect(getUsersGen.next().value).toEqual(
        put(loadingUsersComplete(LOADING_USERS_COMPLETE))
      );
    });

    describe('when no query params are passed', () => {
      beforeAll(() => {
        getUsersGen = getUsersStart({ queryParams: undefined });
      });

      it('should start loading', () => {
        expect(getUsersGen.next().value).toEqual(
          put(loadingUsersBegin(LOADING_USERS_BEGIN))
        );
      });
  
      it('should fetch the users', () => {
        expect(getUsersGen.next().value).toEqual(
          call(fetchUsers, DEFAULT_PAGINATION_QUERY)
        );
      });
    });
  });
});
