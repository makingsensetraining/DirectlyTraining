import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from './LoginPage';

function setup(props) {
  return shallow(<LoginPage {...props} />);
}

describe('<LoginPage /> component', () => {
  it('renders itself', () => {
    const wrapper = setup({
      actions: {}
    });

    expect(wrapper.find('section')).toHaveLength(1);
    expect(wrapper.find('LoginForm')).toHaveLength(1);
  });
  /**
  it('should handle form submit itself', () => {
    const login = jest.fn();
    const wrapper = setup({
      actions: {
        login
      }
    });
    const form = wrapper.find('LoginForm');

    form.simulate('submit');

    expect(login).toHaveBeenCalledTimes(1);
  });
  **/
});
