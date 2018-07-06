import store from './store';
import initialState from './reducers/initialState';

describe('App Store', () => {
  it('should screate the store', () => {
    // Arrange
    const expectedState = {
      ...initialState,
      routing: {
        location: null
      }
    };
    // Assert
    expect(store.getState()).toEqual(expectedState);
  });
});



