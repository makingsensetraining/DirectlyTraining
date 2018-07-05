import React from 'react';
import { shallow } from 'enzyme';
import { Main } from './Main'; // Undecorated version.

function setup(props) {
  return shallow(<Main {...props} />);
}

describe('<Main /> component', () => {
  it('renders itself', () => {
    const wrapper = setup({
      actions: {},
      usersActions: {}
    });

    expect(wrapper.find('Switch')).toHaveLength(1);
    expect(wrapper.find('Route')).toHaveLength(3);
  });
});
