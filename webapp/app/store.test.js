import store from './store';
import initialState from './reducers/initialState';

describe('App Store', () => {
  it('should create the store', () => {
    const expectedState = {
      ...initialState,
      routing: {
        location: null
      }
    };
    
    expect(store.getState()).toEqual(expectedState);
  });
});
