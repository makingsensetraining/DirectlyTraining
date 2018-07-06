import React from 'react';
import { shallow } from 'enzyme';
import { keys } from 'lodash/fp'; // Undecorated version.
import initialState from '../../../reducers/initialState';
import { LoginPage, mapDispatchToProps, mapStateToProps } from './LoginPage';

function setup(props) {
  return shallow(<LoginPage {...props} />);
}

describe('<LoginPage /> component', () => {
  it('renders itself', () => {
    // Arrange Act
    const wrapper = setup({
      actions: {}
    });

    // Asert
    expect(wrapper.find('section')).toHaveLength(1);  
    expect(wrapper.find('LoginForm')).toHaveLength(1);
  });

  it('should handle form submit itself', () => {
    // Arrange
    const login = jest.fn();
    const wrapper = setup({
      actions: {
        login
      }
    });
    const form = wrapper.find('LoginForm');

    // Act
    form.simulate('submit');

    // Assert
    expect(login).toHaveBeenCalledTimes(1);
  });

  describe('mapStateToProps functions', () => {
    it('should return the initial state of auth module', () => {
      // Arramge
      const expectedProps = {
        authenticating: false,
        isAuthenticated: false,
        error: false,
        errorMessage: null,
        user: null
      };

      // Act
      const props = mapStateToProps(initialState);

      // Assert
      expect(props).toEqual(expectedProps);
    });
  });

  describe('mapDispatchToProps functions', () => {
    it('actions prop should be defined', () => {
      // Arrange
      const dispatch = () => {};
      // Act
      const props = mapDispatchToProps(dispatch);

      // Assert
      expect(props.actions).toBeDefined();
    });

    it('should return the binded actions', () => {
      // Arrange
      const dispatch = () => {};
      const expectedActions = [
        'loginRequest',
        'loginSuccess',
        'loginError',
        'login'
      ];
      // Act
      const props = mapDispatchToProps(dispatch);

      // Assert
      expect(keys(props.actions)).toEqual(expectedActions);
    });
  });
});
