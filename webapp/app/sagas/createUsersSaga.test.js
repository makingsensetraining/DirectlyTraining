import {
  call,
  put,
  takeLatest
} from 'redux-saga/effects';
import {
  CREATE_USERS_BEGIN,
  LOADING_USERS_BEGIN,
  LOADING_USERS_COMPLETE
} from '../actions/actionTypes';
import {
  createUsersSaga,
  createUsersStart
} from './createUsersSaga';
import * as userService from '../services/userService';
import {
  createUsersSuccess,
  loadingUsersBegin,
  loadingUsersComplete
} from '../actions';

describe('Create Users Saga', () => {
  it('should be defined', () => {
    expect(createUsersSaga).toBeDefined();
    expect(createUsersStart).toBeDefined();
  });

  it('should take a create users action', () => {
    const gen = createUsersSaga();

    expect(gen.next().value).toEqual(
      takeLatest(CREATE_USERS_BEGIN, createUsersStart)
    );
  });

  describe('Creating a user', () => {
    let createUsersGen;
    let user;
    let newUser;
    let expectedUser;

    beforeAll(async () => {
      user = {
        name: 'John Doe',
        email: 'john@doe.com'
      };
      expectedUser = {
        _id: 'fake.john.id',
        id: 'fake.john.id',
        name: 'John Doe',
        email: 'john@doe.com'
      };
      createUsersGen = createUsersStart({ user });

      userService.createUsers = jest.fn(() => {
        return Promise.resolve({
          data: {
            _id: 'fake.john.id',
            id: 'fake.john.id',
            name: 'John Doe',
            email: 'john@doe.com'
          }
        });
      });

      const userServiceResponse = await userService.createUsers(user);
      newUser = userServiceResponse.data;
    });

    it('should start loading', () => {
      expect(createUsersGen.next().value).toEqual(
        put(loadingUsersBegin(LOADING_USERS_BEGIN))
      );
    });

    it('should create the user', () => {
      expect(createUsersGen.next({ user }).value).toEqual(
        call(userService.createUsers, user)
      );

      expect(newUser).toEqual(expectedUser);
    });

    it('should put the created user', () => {
      expect(createUsersGen.next({ data: newUser }).value).toEqual(
        put(createUsersSuccess(newUser))
      );
    });

    it('should complete loading', () => {
      expect(createUsersGen.next().value).toEqual(
        put(loadingUsersComplete(LOADING_USERS_COMPLETE))
      );
    });
  });
});
