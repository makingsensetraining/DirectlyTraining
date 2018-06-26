import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from './LoginPage'; // Undecorated version.

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
});
