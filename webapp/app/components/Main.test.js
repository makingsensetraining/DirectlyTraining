import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';

describe('<Main /> component', () => {

  it('renders itself', () => {
    const wrapper = shallow(<Main />);

    expect(wrapper.find('Switch')).toHaveLength(1);
    expect(wrapper.find('Route')).toHaveLength(3);
  });
});
