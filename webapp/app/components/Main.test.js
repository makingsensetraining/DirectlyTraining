import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';

describe('<Main /> component', () => {

  it('renders itself', () => {
    // Arrange
    const wrapper = shallow(<Main />);

    // Assert
    expect(wrapper.find('Switch')).toHaveLength(1);
    expect(wrapper.find('Route')).toHaveLength(3);
  });
});
