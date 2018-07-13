import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from './LoginPage';

function setup(props) {
  return shallow(<LoginPage {...props} />);
}
describe('<LoginPage /> component', () => {
  const mockAuthContext = {
    login: jest.fn
  };
  it('renders itself', () => {
    const wrapper = setup({
      authContext: mockAuthContext
    });

    expect(wrapper.find('section')).toHaveLength(1);
    expect(wrapper.find('LoginForm')).toHaveLength(1);
  });
});
