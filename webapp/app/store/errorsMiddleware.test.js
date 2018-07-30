import errorsMiddleware from './errorsMiddleware';

describe('errors middleware for redux', () => {
  const store = {}
  const state = {};
  const action = {};
  const nextHandler = errorsMiddleware(store)(state)(action);

  it('must return a function to handle next', () => {
  });
});
