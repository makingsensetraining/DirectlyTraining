import React from 'react';
import { shallow } from 'enzyme';
import { HomePage } from './HomePage';

function setup(props) {
  return shallow(<HomePage {...props} />);
}

describe('<HomePage /> component', () => {
  it('renders itself', () => {
    const wrapper = setup({
      usersActions: {
        getUsers: jest.fn(),
        selectUser: jest.fn()
      }
    });

    expect(wrapper.find('Header')).toHaveLength(1);
    expect(wrapper.find('Footer')).toHaveLength(1);

    expect(wrapper.find('.container')).toHaveLength(1);
  });
});
