import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';

describe('<Main /> component', () => {

  it('renders itself', () => {
    const mockContext = {
      auth: {
        authenticating: false,
        isAuthenticated: false,
        error: false,
        errorMessage: null,
        user: null
      },
      routing: null,
      users: {
        data: [],
        selectedUser: {},
        fetch: {
          loading: false,
          error: null
        }
      }
    };
    // Arrange
    const wrapper = shallow(<Main context={mockContext} />);

    // Assert
    expect(wrapper.find('Switch')).toHaveLength(1);
    expect(wrapper.find('Route')).toHaveLength(3);
  });
});
