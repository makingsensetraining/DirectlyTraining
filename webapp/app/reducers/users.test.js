import reducer from './users';

describe('users reducer', () => {
  it('should return the initial state', () => {
    const result = reducer(undefined, {});

    expect(result).toEqual({
      data: [],
      selectedUser: null,
      fetch: {
        pending: false,
        error: false
      }
    });
  });
});
