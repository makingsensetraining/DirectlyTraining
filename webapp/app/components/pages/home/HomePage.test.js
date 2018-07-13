import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './HomePage';

describe('<HomePage /> component', () => {
  let mockContext;

  beforeEach(() => {
    mockContext = {
      data: [],
      selectedUser: {},
      fetch: {
        loading: false,
        error: null
      }
    };
  });

  it('renders itself', () => {
    const wrapper = shallow(<HomePage usersContext={mockContext} />);

    expect(wrapper.find('Header')).toHaveLength(1);
    expect(wrapper.find('.container')).toHaveLength(1);
  });
});
