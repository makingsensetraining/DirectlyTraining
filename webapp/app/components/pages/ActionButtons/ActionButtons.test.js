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

describe('<ActionButtons />', () => {
  it('renders itself', () => {
    const wrapper = setup({
      user: {}
    });

    expect(wrapper.find('Button')).toHaveLength(3);
    expect(wrapper.find('MsModal')).toHaveLength(1);
  });

  describe('mapStateToProps function', () => {
    it('should return the initial state', () => {
      const expectedProps = {
        user: {}
      };

      const props = mapStateToProps(Object.assign({}, initialState));

      expect(props).toEqual(expectedProps);
    });
  });

  describe('componentWillReceiveProps function', () => {
    it('should set the new selected user', () => {
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

      wrapper.setProps({user});

      expect(wrapper.state().user).toEqual(expectedState.user);
    });

    it('should skip setting selected user when it is the same', () => {
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

      wrapper.setProps({user});

      expect(wrapper.state().user).toEqual(expectedState);
    });

    it('should use default parameters when users are undefined', () => {
      const expectedState = {
        email: '',
        name: '',
        phone: '',
        skypeId: ''
      };
      const wrapper = setup({
        user: undefined
      });

      wrapper.setProps({user: undefined});

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
      const wrapper = setup({
        user: {}
      });
      const expectedState = {
        ...state,
        actionType: 'add',
      };

      wrapper.find('Button[color="primary"]').simulate('click');

      expect(wrapper.state()).toEqual(expectedState);
    });

    it('should toggle Edit Modal', () => {
      const wrapper = setup({
        user: {}
      });
      const expectedState = {
        ...state,
        actionType: 'edit',
      };

      wrapper.find('Button[color="info"]').simulate('click');

      expect(wrapper.state()).toEqual(expectedState);
    });

    it('should toggle Delete Modal', () => {
      const wrapper = setup({
        user: {}
      });
      const expectedState = {
        ...state,
        actionType: 'delete',
      };

      wrapper.find('Button[color="danger"]').simulate('click');

      expect(wrapper.state()).toEqual(expectedState);
    });
  });

  describe('saveUser handler', () => {
    it('should not saveUser', () => {
      const onConfirm = jest.fn();
      const wrapper = setup({
        user: {},
        onConfirm
      });

      wrapper.instance().saveUser();

      expect(onConfirm).toHaveBeenCalledTimes(0);
    });

    it('should saveUser', () => {
      const onConfirm = jest.fn().mockReturnValue(Promise.resolve());
      const wrapper = setup({
        user: {
          name: 'John Doe',
          email: 'john@doe.com'
        },
        onConfirm
      });

      wrapper.instance().saveUser();

      expect(onConfirm).toHaveBeenCalledTimes(1);
    });

    it('should not call onConfirm when it\'s not a function', () => {
      const onConfirm = undefined;
      const wrapper = setup({
        user: {
          name: 'John Doe',
          email: 'john@doe.com'
        },
        onConfirm
      });
      wrapper.instance().toggle = jest.fn();

      wrapper.instance().saveUser();

      expect(wrapper.instance().toggle).toHaveBeenCalledTimes(0);
    });
  });

  describe('update user state on users form change', () => {
    it('should set new state', () => {
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

      wrapper.instance().updateUserState(event);

      expect(wrapper.state().user).toEqual(expectedUserState);
    });
  });

  describe('cancel modal editions', () => {
    it('should reset selected user to state', () => {
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

      wrapper.instance().cancel();

      expect(wrapper.state().user).toEqual(expectedUserState);
    });

    it('should reset state to empty user', () => {
      const expectedUserState = {
        email: '',
        name: '',
        phone: '',
        skypeId: ''
      };
      const wrapper = setup({
        user: {}
      });

      wrapper.instance().cancel();

      expect(wrapper.state().user).toEqual(expectedUserState);
    });
  });
});
