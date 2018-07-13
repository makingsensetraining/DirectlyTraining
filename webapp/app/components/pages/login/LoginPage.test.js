import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from './LoginPage';

function setup(props) {
  return shallow(<LoginPage {...props} />);
}
describe('<LoginPage /> component', () => {
  it('renders itself', () => {
    const wrapper = setup({});

    expect(wrapper.find('section')).toHaveLength(1);
    expect(wrapper.find('LoginForm')).toHaveLength(1);
  });
});
