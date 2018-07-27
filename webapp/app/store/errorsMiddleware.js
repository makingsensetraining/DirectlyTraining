// eslint-disable-next-line no-unused-vars
const errorsMiddleware = store => next => action => {
  if (action.type.toLowerCase().includes('failed')) {
    errorService.logErrors(action.payload);
  }
  next(action);
};

export default errorsMiddleware;
