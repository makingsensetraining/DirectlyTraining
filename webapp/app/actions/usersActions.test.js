import configureStore from 'redux-mock-store';
import promiseMiddleware from 'redux-promise-middleware';
import {
  createUser,
  getUsers,
  selectUser
} from './usersActions';
import actionTypes from '../actions/actionTypes';
import * as userService from '../services/userService';
const { USERS } = actionTypes;

describe('usersActions', () => {
  const middlewares = [promiseMiddleware()];
  const mockStore = configureStore(middlewares);
  const defaultReponseStatusProps = {
    statusCode: 200,
    statusText: 'OK'
  };
  const defaultPaginatedResponse = {
    count: 1,
    page: 0,
    limit: 0,
    totalPages: 1,
    docs: [{ foo: 'bar' }]
  };

  beforeEach(() => {
    userService.createUsers = jest.fn(() => Promise.resolve({
      ...defaultReponseStatusProps,
      data: 'foo'
    }));
      
    userService.deleteUsers = jest.fn(() => Promise.resolve({
      ...defaultReponseStatusProps,
      statusCode: 204
    }));

    userService.fetchUsers = jest.fn(() => Promise.resolve({
      ...defaultReponseStatusProps,
      data: defaultPaginatedResponse
    }));

    userService.updateUsers = jest.fn(() => Promise.resolve({
      ...defaultReponseStatusProps,
      data: 'foo'
    }));
  });

  afterEach(() => {
    userService.createUsers.mockClear();
    userService.deleteUsers.mockClear();
    userService.fetchUsers.mockClear();
    userService.updateUsers.mockClear();
  });

  describe('getUsers', () => {
    it('should be defined', () => {
      expect(userService.fetchUsers).toBeDefined();
    });

    it('should be a function', () => {
      expect(userService.fetchUsers).toEqual(expect.any(Function));
    });

    describe('when the service call is successful', () => {
      it('should create an action to get users', async () => {
        const expectedActions = [
          { type: 'USERS/GET_ALL_PENDING' },
          { 
            type: 'USERS/GET_ALL_FULFILLED',
            payload: {
              data: {
                count: 1,
                page: 0,
                limit: 0,
                totalPages: 1,
                docs: [{ foo: 'bar' }]
              },
              statusCode: 200,
              statusText: 'OK'
            }
          }
        ];
        const initalState = {};
  
        const store = mockStore(initalState);
        const getUsersActionResult = await getUsers(); 
  
        store.dispatch(getUsersActionResult).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
    });

    describe('when the service call fails', () => {
      // TODO add tests for createAction/handleAction middleware when the promise fails
    });
  });

  describe('selectUser', () => {
    describe('when the service call is successful', () => {
      it('should create an action to select a user', async () => {
        const result = await selectUser();
    
        expect(result).toEqual(expect.objectContaining({
          type: USERS.SELECT
        }));
      });
    });

    describe('when the service call fails', () => {
      // TODO add tests for createAction/handleAction middleware when the promise fails
    });
  });

  describe('createUsers', () => {
    it('should be defined', () => {
      expect(userService.createUsers).toBeDefined();
    });

    it('should be a function', () => {
      expect(userService.createUsers).toEqual(expect.any(Function));
    });
    
    describe('when the service call is successful', () => {
      it('should create an action to create a user', async () => {
        const expectedUser = { 'name': 'foo' };
        const expectedActions = [
          { meta: { ...expectedUser }, type: 'USERS/CREATE_PENDING' },
          { meta: { ...expectedUser }, 
            type: 'USERS/CREATE_FULFILLED',
            payload: {
              data: 'foo',
              statusCode: 200,
              statusText: 'OK'
            }
          }
        ];
  
        const store = mockStore({});
        const createUsersActionResult = await createUser(expectedUser); 
  
        store.dispatch(createUsersActionResult).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      });
    });

    describe('when the service call fails', () => {
      // TODO add tests for createAction/handleAction middleware when the promise fails
    });
  });

  describe('updateUsers', () => {
    it('should be defined', () => {
      expect(userService.updateUsers).toBeDefined();
    });

    it('should be a function', () => {
      expect(userService.updateUsers).toEqual(expect.any(Function));
    });
  });

  describe('deleteUsers', () => {
    it('should be defined', () => {
      expect(userService.deleteUsers).toBeDefined();
    });

    it('should be a function', () => {
      expect(userService.deleteUsers).toEqual(expect.any(Function));
    });
  });
});
