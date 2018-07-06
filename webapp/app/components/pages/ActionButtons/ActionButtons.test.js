import React from 'react';
import { shallow } from 'enzyme';
import { ActionButtons, mapStateToProps } from './ActionButtons';
import initialState from '../../../reducers/initialState';

function setup(props) {
  return shallow(
    <ActionButtons
      {...props}
      onCreateUser={jest.fn()}
    />
  );
}

const EMPTY_USER = {
  name: '',
  email: '',
  phone: '',
  skypeId: ''
};

describe('<ActionButtons /> component', () => {
  it('renders itself', () => {
    // Arrange Act
    const wrapper = setup({
      user: {}
    });

    // Assert
    expect(wrapper.find('Button')).toHaveLength(3);
    expect(wrapper.find('MsModal')).toHaveLength(1);
  });

  describe('mapStateToProps function', () => {
    it('should return the initial state', () => {
      // Arrange
      const expectedProps = {
        user: {}
      };

      // Act
      const props = mapStateToProps(initialState);

      // Assert
      expect(props).toEqual(expectedProps);
    });
  });

  describe('componentWillReceiveProps function', () => {
    it('should set the new selected user', () => {
      // Arrange
      const expectedState = {
        user: {
          id: 'id'
        }
      };
      const wrapper = setup({
        user: {}
      });

      const user = {
        id: 'id'
      };

      // Act
      wrapper.setProps({user});

      // Assert
      expect(wrapper.state().user).toEqual(expectedState.user);
    });

    it('should skip setting selected user when it is the same', () => {
      // Arrange
      const user = {
        id: 'id'
      };
      const expectedState = {
        email: '',
        id: 'id',
        name: '',
        phone: '',
        skypeId: ''
      };
      const wrapper = setup({
        user
      });

      // Act
      wrapper.setProps({user});

      // Assert
      expect(wrapper.state().user).toEqual(expectedState);
    });

    it('should use default parameters when users are undefined', () => {
      // Arrange
      const expectedState = {
        email: '',
        name: '',
        phone: '',
        skypeId: ''
      };
      const wrapper = setup({
        user: undefined
      });

      // Act
      wrapper.setProps({user: undefined});

      // Assert
      expect(wrapper.state().user).toEqual(expectedState);
    });
  });

  describe('toggleModal Functions', () => {
    const state = {
      actionType: '',
      errors: {},
      isUserModalOpen: true,
      modalBody: {},
      modalTitle: '',
      modalYesLabel: '',
      user: {
        email: '',
        name: '',
        phone: '',
        skypeId: ''
      }
    };

    it('should toggle Add Modal', () => {
      // Arrange
      const wrapper = setup({
        user: {}
      });
      const expectedState = {
        ...state,
        actionType: 'add',
      };

      // Act
      wrapper.find('Button[color="primary"]').simulate('click');

      // Assert
      expect(wrapper.state()).toEqual(expectedState);
    });

    it('should toggle Edit Modal', () => {
      // Arrange
      const wrapper = setup({
        user: {}
      });
      const expectedState = {
        ...state,
        actionType: 'edit',
      };

      // Act
      wrapper.find('Button[color="info"]').simulate('click');

      // Assert
      expect(wrapper.state()).toEqual(expectedState);
    });

    it('should toggle Delete Modal', () => {
      // Arrange
      const wrapper = setup({
        user: {}
      });
      const expectedState = {
        ...state,
        actionType: 'delete',
      };

      // Act
      wrapper.find('Button[color="danger"]').simulate('click');

      // Assert
      expect(wrapper.state()).toEqual(expectedState);
    });
  });

  describe('saveUser handler', () => {
    it('should not saveUser', () => {
      // Arrange
      const onConfirm = jest.fn();
      const wrapper = setup({
        user: {},
        onConfirm
      });

      // Act
      wrapper.instance().saveUser();

      // Assert
      expect(onConfirm).toHaveBeenCalledTimes(0);
    });

    it('should saveUser', () => {
      // Arrange
      const onConfirm = jest.fn().mockReturnValue(Promise.resolve());
      const wrapper = setup({
        user: {
          name: 'John Doe',
          email: 'john@doe.com'
        },
        onConfirm
      });

      // Act
      wrapper.instance().saveUser();

      // Assert
      expect(onConfirm).toHaveBeenCalledTimes(1);
    });

    it('should not call onConfirm when it\'s not a function', () => {
      // Arrange
      const onConfirm = {};
      const wrapper = setup({
        user: {
          name: 'John Doe',
          email: 'john@doe.com'
        },
        onConfirm
      });
      wrapper.instance().toggle = jest.fn();

      // Act
      wrapper.instance().saveUser();

      // Assert
      expect(wrapper.instance().toggle).toHaveBeenCalledTimes(0);
    });
  });

  describe('update user state on users form change', () => {
    it('should set new state', () => {
      // Arrange
      const event = {
        target: {
          name: 'name',
          value: 'John Doe'
        }
      };
      const expectedUserState = {
        email: '',
        name: 'John Doe',
        phone: '',
        skypeId: ''};
      const wrapper = setup({});

      // Act
      wrapper.instance().updateUserState(event);

      // Assert
      expect(wrapper.state().user).toEqual(expectedUserState);
    });
  });

  describe('cancel modal editions', () => {
    it('should reset selected user to state', () => {
      // Arrange
      const expectedUserState = {
        id: '1',
        email: 'john@doe.com',
        name: 'John Doe',
        phone: '123456',
        skypeId: 'jdoe'
      };
      const wrapper = setup({
        user: expectedUserState
      });

      // Act
      wrapper.instance().cancel();

      // Assert
      expect(wrapper.state().user).toEqual(expectedUserState);
    });

    it('should reset state to empty user', () => {
      // Arrange
      const expectedUserState = {
        email: '',
        name: '',
        phone: '',
        skypeId: ''
      };
      const wrapper = setup({
        user: {}
      });

      // Act
      wrapper.instance().cancel();

      // Assert
      expect(wrapper.state().user).toEqual(expectedUserState);
    });
  });
});
