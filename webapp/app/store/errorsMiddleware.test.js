import errorsMiddleware from './errorsMiddleware';

xdescribe('errors middleware for redux', () => {
  const store = {};
  const state = {};
  const action = {};
  const nextHandler = errorsMiddleware(store)(state)(action);

  it('must return a function to handle next', () => {
  });
});
