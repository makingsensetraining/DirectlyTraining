import { createStore } from 'redux';
import rootReducer from './root';
import initialState from './initialState';

describe('Root reducer', () => {
  it('should start with the inital state', () => {
    // Arrange
    const expectedState = {
      ...initialState,
      routing: {
        location: null
      }
    };
    // Act
    let store = createStore(rootReducer);

    // Assert
    expect(store.getState()).toEqual(expectedState);
  });
});



